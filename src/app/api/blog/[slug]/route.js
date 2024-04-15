//Laget av Markus Moen Magnussen

import { connectToDb } from "@/app/lib/connectToDb";
import { Menu } from "@/app/lib/models";
import { NextResponse } from "next/server";
import { cache } from "react";

export const GET = async ( req , { params }) => {

    const {slug} = params;
    console.log('slug', slug);
    console.log('req', req);


    try {
        //cache.delete(slug);
        await connectToDb();

        const post = await Menu.findOne({slug});
        console.log('Got post: ', post);
        return NextResponse.json(post);
        
    } catch (error) {
        console.log(error);
        throw new Error('Error getting post');
    }
}

export const DELETE = async ( req , { params }) => {
    
    const {slug} = params;
    console.log('slug', slug);
    console.log('req', req);

    try {

        connectToDb();

        const post = await Menu.findOneAndDelete({slug});
        console.log('post deleted', post);
        return NextResponse.json(post);

    } catch (error) {
        console.log(error);
        throw new Error('Error deleting post');
    }
}
