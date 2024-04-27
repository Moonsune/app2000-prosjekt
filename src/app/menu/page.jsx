"use client";

//Laget av Markus Moen Magnussen og Kaisa Lien

import React, { useState, useEffect } from 'react';
import PostCard from '@/components/postCard/postCard';
import styles from './menu.module.css';
import {SessionProvider} from "next-auth/react";
import CartIndicator from '@/components/cartIndicator/cartIndicator';
// Assuming `getPosts` is not needed if fetching from an API.

//GPT GENERATED CODE: FIX WHEN TIME

const BlogPage = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);
  const [addedItem, setAddedItem] = useState(null);

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
        setError(true);
      }
    };

    getData();
  }, []); // The empty array means this effect runs once on mount.

  const addToCart = (item) => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = [...storedCartItems, item];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    console.log('Item added to cart:', item);
    setAddedItem(item);
};

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (!posts) {
    return <div>Loading...</div>; // or any loading state
  }

  return (
      <SessionProvider>
      <div className={styles.container}>               
      <div className={styles.indicator}>
          {addedItem && <CartIndicator item={addedItem} />}
          </div>
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
