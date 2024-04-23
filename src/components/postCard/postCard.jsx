// Laget av Markus Moen Magnussen

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './postCard.module.css';

const PostCard = ({ post, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

    const imageValidation = (src) => {
        if (src && (src.startsWith('http') || src.startsWith('https'))) {
            return src;
        } else {
            return "https://i.ytimg.com/vi/lq7brEFcNiQ/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBfRdZxjRdNftBy-DY9fqB55uOdag";
        }
    }
  const handleAddToCart = () => {
    addToCart({ ...post, quantity:1});
  };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    {!imgError ? (
                        <Image
                            src={imageValidation(post.img)}
                            alt={post.title}
                            layout="fill"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div>No image available</div> // Display this when the image fails to load
                    )}
                </div>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.text}>{post.desc}</p>
                <div className={styles.priceDiv}>
                    <button className={styles.orderButton} onClick={handleAddToCart}>Stor kr {post.priceLarge}.-</button>
                    <button className={styles.orderButton} onClick={handleAddToCart}>Liten kr {post.priceSmall}.-</button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
