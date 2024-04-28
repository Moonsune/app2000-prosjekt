"use server"

const fetchMenuItems = async () => {
    try {
        const items = await fetch(process.env.NEXT_PUBLIC_MENU_PATH, { method: 'GET' })
        return items.json();
    } catch (error) {
        console.error("Failed to fetch menu items:", error);
        throw error;  // Re-throw to handle it in the component
    }
}

export default fetchMenuItems;
