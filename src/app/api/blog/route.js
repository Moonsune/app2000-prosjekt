import { connectToDb } from "@/app/lib/connectToDb";
import {Post} from "@/app/lib/models";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
import { cache } from "react";

export const GET = async ( req ) => {
    //cache.delete('posts');
    noStore();
    try {
        connectToDb();

        const posts = await Post.find();
        return NextResponse.json(posts);
        
    } catch (error) {
        console.log(error);
        throw new Error('Error');
    }
}