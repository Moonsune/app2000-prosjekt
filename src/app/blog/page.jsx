"use client";

import React, { useState, useEffect } from 'react';
import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
// Assuming `getPosts` is not needed if fetching from an API.

//GPT GENERATED CODE: FIX WHEN TIME

const BlogPage = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);

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

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (!posts) {
    return <div>Loading...</div>; // or any loading state
  }

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.slug}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
