// Laget av Markus Moen Magnussen og Kaisa Lien

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './postCard.module.css';

const PostCard = ({ post }) => {
    const [imgError, setImgError] = useState(false);

    const imageValidation = (src) => {
        if (src && (src.startsWith('http') || src.startsWith('https'))) {
            return src;
        } else {
            return "https://i.ytimg.com/vi/lq7brEFcNiQ/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBfRdZxjRdNftBy-DY9fqB55uOdag";
        }

    };

    const addToCart = (item) => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = [...storedCartItems, item];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        console.log('Item added to cart:', item);
    };

    const handleAddToCart = (postIn, selectedPrice, size) => {
        console.log("priceLarge", post.priceLarge)
        console.log("priceSmall", post.priceSmall)
        addToCart(
            {post: {title: postIn.title, desc: postIn.desc, selectedPrice, slug: postIn.slug}, quantity: 1, size}
        );
    };


    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    {post.img ? (
                        <Image
                            src={imageValidation(post.img)}
                            alt={post.title}
                            layout="fill"
                        />
                    ) : (
                        <div>No image available</div>
                    )}
                </div>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.text}>{post.desc}</p>
                <div className={styles.priceDiv}>
                    <button className={styles.priceLarge} onClick={() => handleAddToCart(post, post.priceLarge, "stor")}>Stor -
                        kr {post.priceLarge}.-
                    </button>
                    <button className={styles.priceSmall} onClick={() => handleAddToCart(post, post.priceSmall, "liten")}>Liten -
                        kr {post.priceSmall}.-
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
