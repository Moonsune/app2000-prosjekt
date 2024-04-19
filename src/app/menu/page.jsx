"use client";
import React, { useState, useEffect } from 'react';
import PostCard from '@/components/postCard/postCard';
import styles from './menu.module.css';
import MenuCartPage from '../menuCart/page';

const MenuPage = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);
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
        setError(true);
      }
    };

    getData();
  }, []);

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    console.log('Updated cart items:', updatedCartItems); 
  };
  

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
      console.log('Retrieved cart items:', JSON.parse(storedCartItems)); 
    }
  }, []);
  

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.slug}>
          <PostCard post={post} addToCart={addToCart} />
        </div>
      ))}
      <MenuCartPage cartItems={cartItems} removeFromCart={removeFromCart} posts={posts} />
    </div>
  );
};

export default MenuPage;
