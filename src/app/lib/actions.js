// Laget av Markus Moen Magnussen

"use server"

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import {Booking, Menu, Order, OrderHistory} from "./models";
import { signIn } from "@/app/lib/auth";

const titleToSlug = (title) => {
    return title.toLowerCase().split(' ').join('-');
}

// TODO: Denne må også egentlig ta brukerdata for å vite hvem som har bestilt :<)
export const addOrder = async (items) => {
    let orderList = [];
    try {
        items.forEach(item => {
            const post = item.post;
            const amt = item.quantity;
            const size = item.size;
            const newOrder = new Order({
                title: post.title,
                desc: post.desc,
                price: post.selectedPrice,
                slug: post.slug,
                qty: amt,
                size: size });
            orderList.push(newOrder);

        });
        console.log(orderList.length);
        if (orderList.length) {
            console.log(orderList)
            await connectToDb();
            // Siden orderHistory tar en array med JSON-objekter, må hver item wrappes inn i et eget objekt
            let ordersList = new OrderHistory({
                items: orderList,
            });
            // TODO: uncomment
            await ordersList.save();
            console.log('Order created');
        }
    } catch (error) {
        console.error("Error creating order:", error);
    }
}


/**
 * tar inn et JSON objekt som inneholder detaljer for retten
 * @param item
 * @returns {Promise<void>}
 */
export const addPost = async (item) => {
    "use server";
    const title = item.title;
    const desc = item.desc;
    const img = item.img;
    const priceLarge = item.priceLarge;
    const priceSmall = item.priceSmall;
    const slug = title.toLowerCase().split(' ').join('-');

    try {
        await connectToDb();
        const newPost = new Menu({title, desc, img, slug, priceLarge, priceSmall});
        await newPost.save();
        console.log("post added to db");
        revalidatePath('/menu');
    }catch (error) {
        console.log(error);

    }
}

/**
 * oppretter ny booking
 * @param item
 * @returns {Promise<boolean>}
 */
export const nyBooking = async (item) => {
    // TODO: implementer sjekk for dobbeltbooking
    const epost = item.epost;
    const dato = item.dato;
    const tid = item.tid;
    const antall = item.antall;
    const slug = (item.epost, "-", dato, tid);

    try {
        connectToDb();
        const newBooking = new Booking({ epost, dato, tid, antall, slug});
        await newBooking.save();
        console.log("Booking added to db");
        return true;
    }catch (error) {
        console.log(error);
        return false;

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

export const handleBookingRequest = async (type, email, time, contents) => {
    "use server";
    const henvendelseJSON = {type: type, email: email, time: time, content: contents};
    try {
        // TODO: legg til logikk for å legge til
        await connectToDb();

    } catch (e) {
        console.log(e);
    }
}