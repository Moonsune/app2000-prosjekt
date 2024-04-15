// Laget av Markus Moen Magnussen

"use server"

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Menu } from "./models";
import { signIn, signOut } from "@/app/lib/auth";

const titleToSlug = (title) => {
    return title.toLowerCase().split(' ').join('-');
}


export const sayHello = async () => {
    "use server";
    console.log('Hello, world!');
};

export const addPost = async (formData) => {

    const title = formData.get('title');
    const desc = formData.get('desc');
    const img = formData.get('img');
    const slug = title.toLowerCase().split(' ').join('-');
    const price = formData.get('price');

    try {
        connectToDb();
        const newPost = new Menu({title, desc, img, slug, price});
        await newPost.save();
        console.log("post added to db");
        revalidatePath('/blog');
    }catch (error) {
        console.log(error);

    }
}

export const deletePost = async (formData) => {


    const {id} = Object.fromEntries(formData);

    try {
        connectToDb();
        await Menu.findByIdAndDelete(id);
        console.log("post deleted from db");
        //revalidatePath('/blog');
    }catch (error) {
        console.log(error);
    }
}

export const updatePost = async (id, { title, desc}) => {

    console.log('updating post', id, title, desc);
    const slug = titleToSlug(title);
    
    try {
        connectToDb();
        await Menu.findByIdAndUpdate(id, {title, desc, slug});
    } catch (error) {
        console.log("Error updating post" + error);
    }
}

export const handleGithubLogin = async () => {
    "use server";
    await signIn('github');
};

export const handleLogout = async () => {
    "use client";
    await signOut('localhost:3000');
    console.log('logged out');
};