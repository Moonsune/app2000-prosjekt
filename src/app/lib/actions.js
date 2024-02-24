"use server"

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Post } from "./models";
import { signIn, signOut } from "next-auth";


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


export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
};

export const handleLogout = async () => {
    "use server";
    await signOut();
}