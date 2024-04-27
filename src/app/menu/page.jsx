"use client";

//Laget av Markus Moen Magnussen og Kaisa Lien
import React, { useState, useEffect } from 'react';
import PostCard from '@/components/postCard/postCard';
import CartIndicator from '@/components/cartIndicator/cartIndicator'; 
import styles from './menu.module.css';
import { SessionProvider } from "next-auth/react";

const BlogPage = () => {
    const [posts, setPosts] = useState(null);
    const [cartItems, setCartItems] = useState([]); 

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_BLOG_PATH, { method: 'GET' });
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

    return (
        <SessionProvider>            
          <div className={styles.indicatorContainer}>
                <CartIndicator items={cartItems} />
                </div>
            <div className={styles.container}>

                {posts.map((post) => (
                    <div className={styles.post} key={post.slug}>
                        <PostCard post={post} addToCart={addToCart} />
                    </div>
                ))}
            </div>
        </SessionProvider>
    );
};

export default BlogPage;
