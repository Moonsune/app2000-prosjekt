// Laget av Markus Moen Magnussen

"use server"

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Menu } from "./models";
import { signIn, signOut } from "@/app/lib/auth";

const titleToSlug = (title) => {
    return title.toLowerCase().split(' ').join('-');
}

/**
 * tar inn et JSON objekt som inneholder detaljer for retten
 * @param item
 * @returns {Promise<void>}
 */
export const addPost = async (item) => {

    const title = item.title;
    const desc = item.desc;
    const img = item.img;
    const priceLarge = item.priceLarge;
    const priceSmall = item.priceSmall;
    const slug = title.toLowerCase().split(' ').join('-');

    try {
        connectToDb();
        const newPost = new Menu({title, desc, img, slug, priceLarge, priceSmall});
        await newPost.save();
        console.log("post added to db");
        revalidatePath('/menu');
    }catch (error) {
        console.log(error);

    }
}
/**
 * function takes the ID of an object stored in database and deletes it
 * @param item
 * @returns {Promise<void>}
 */
export const deletePost = async (item) => {

    console.log("deleting", item);
    try {
        connectToDb();
        await Menu.findByIdAndDelete(item);
        console.log("post deleted from db");
        //revalidatePath('/menu');
    }catch (error) {
        console.log(error);
    }
}

export const updatePost = async (id, { title, desc, img}) => {

    console.log('updating post', id, title, desc, img);
    const slug = titleToSlug(title);
    const item = {};
    
    try {
        connectToDb();
        // sjekker om følgende inneholder data, legger det til i item
        // oppdaterer bare feltene som inneholder data
        if (title)
            item.title = title;
        if (desc)
            item.desc = desc;
        if (img)
            item.img = img;
        await Menu.findByIdAndUpdate(id, item);
    } catch (error) {
        console.log("Error updating post" + error);
    }
}

export const handleGithubLogin = async () => {
    "use server";
    await signIn('github');
};