// Laget av Markus Moen Magnussen

import { connectToDb } from "./connectToDb";
import { Menu } from "./models";
import { User } from "./models";


import { unstable_noStore as noStore } from "next/cache";


export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await fetch(Menu.find().exec(), {cache: noStore});
        console.log("posts found", posts);
        return posts;
        
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch posts');
    }
}

export const getPost = async (id) => {
    try {
        connectToDb();
        console.log('id', id);
        const post = await Menu.findById({_id: id});
        console.log("post found", post)
        return post;
        
    } catch (error) {
        console.log(error);
        throw new Error('Error getting post');
    }
}

export const getUser = async (id) => {
    try {
        connectToDb();
        const user = await (User.findById(id));
        return user;
        
    } catch (error) {
        console.log(error);
        return "unknown user";
    }
}

export const getUsers = async () => {
    try {
        connectToDb();
        const user = await User.find();
        return user;
        
    } catch (error) {
        console.log(error);
        throw new Error('Error getting user');
    }
}
