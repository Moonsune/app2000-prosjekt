"use server"

import { connectToDb } from "@/app/lib/connectToDb";
import { Menu } from "@/app/lib/models";

const fetchMenuItems = async () => {
    try {
        const items = await fetch(process.env.NEXT_PUBLIC_BLOG_PATH, { method: 'GET' })
        return items.json();
    } catch (error) {
        console.error("Failed to fetch menu items:", error);
        throw error;  // Re-throw to handle it in the component
    }
}

export default fetchMenuItems;
