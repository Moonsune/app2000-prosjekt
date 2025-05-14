
// Laget av Markus Moen Magnussen

"use client";


import React from 'react';
import Image from 'next/image';
import styles from './menuCard.module.css';

const PostCard = ({post}) => {
    //const router = useRouter();

    const [imgError, setImgError] = React.useState(false);

    const addToCart = () => {
        console.log("addToCart triggered");
    }

    const imageValidation = (src) => {
        if (src && (src.startsWith('http') || src.startsWith('https'))) {
            return src;
        } else {
            return "https://i.ytimg.com/vi/lq7brEFcNiQ/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBfRdZxjRdNftBy-DY9fqB55uOdag";
        }
    }

    const handleAddToCart = (selectedPrice) => {
        addToCart({ ...post, quantity: 1, selectedPrice: selectedPrice });
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
                        <div>No image available</div>
                    )}
                </div>
            </div>
            <div className={styles.bottom}>
            <button className={styles.button}>Bestill</button>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.text}>{post.desc}</p>
                <div className={styles.priceDiv}>
                    <button className={styles.priceLarge} onClick={() => handleAddToCart(post.priceLarge)}>Stor - kr {post.priceLarge}.-</button>
                    <button className={styles.priceSmall} onClick={() => handleAddToCart(post.priceSmall)}>Liten - kr {post.priceSmall}.-</button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
