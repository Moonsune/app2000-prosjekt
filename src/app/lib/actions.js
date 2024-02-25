"use server"

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Post } from "./models";
import { signIn, signOut } from "next-auth";

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
    const slug = formData.get('slug');
    const userId = formData.get('userId');

    try {
        connectToDb();
        const newPost = new Post({title, desc, slug, userId});
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
        await Post.findByIdAndDelete(id);
        console.log("post deleted from db");
        //revalidatePath('/blog');
    }catch (error) {
        console.log(error);
    }
}

export const updatePost = async (formData) => {

    const {id, title, desc} = Object.fromEntries(formData);
    const slug = titleToSlug(title);

    try {
        connectToDb();
        await Post.findByIdAndUpdate(id, {title, desc, slug});
    } catch (error) {
        console.log("Error updating post" + error);
    }
}

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
};

export const handleLogout = async () => {
    "use server";
    await signOut();
    console.log('logged out');
};