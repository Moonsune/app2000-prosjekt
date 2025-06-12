"use client";

//Laget av Markus Moen Magnussen og Kaisa Lien
import React, { useState, useEffect } from 'react';
import MenuCard from '@/components/menuCard/menuCard';
import CartIndicator from '@/components/cartIndicator/cartIndicator'; 
import styles from './menu.module.css';
import { SessionProvider } from "next-auth/react";

const MenuPage = () => {
    const [posts, setPosts] = useState(null);
    const [cartItems, setCartItems] = useState([]); 

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCartItems);
    }, []);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_MENU_PATH, { method: 'GET' });
                if (!res.ok) {
                    throw new Error('Failed to fetch', res.status, res.statusText);
                }
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        getData();
    }, []); 

    const addToCart = (item) => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = [...storedCartItems, item];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        console.log('Item added to cart:', item);
        setCartItems(updatedCartItems); 
    };

    if (!posts) {
        return <div>Loading...</div>; 
    }

    console.log("cartItems", cartItems);


    return (
        <SessionProvider>            
          <div className={styles.indicatorContainer}>
                <CartIndicator items={cartItems} />
                </div>
            <div className={styles.container}>

                {posts.map((post) => (
                    <div className={styles.post} key={post.slug}>
                        <MenuCard post={post} addToCart={addToCart} />
                    </div>
                ))}
            </div>
        </SessionProvider>
    );
};


export default MenuPage;
