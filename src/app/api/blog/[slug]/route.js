import { connectToDb } from "@/app/lib/connectToDb";
import { Post } from "@/app/lib/models";
import { NextResponse } from "next/server";
import { cache } from "react";

export const GET = async ( req , { params }) => {

    const {slug} = params;
    console.log('slug', slug);
    console.log('req', req);


    try {
        //cache.delete(slug);
        connectToDb();

        const post = await Post.findById({slug});
        console.log('post', post);
        return NextResponse.json(post);
        
    } catch (error) {
        console.log(error);
        throw new Error('Error getting post');
    }
}

export const DELETE = async ( req , { params }) => {
    
    const {slug} = params;

    try {

        connectToDb();

        const post = await Post.deleteOne({slug});
        console.log('post deleted', post);
        return NextResponse.json(post);

    } catch (error) {
        console.log(error);
        throw new Error('Error deleting post');
    }
}
