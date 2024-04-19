// postCard/postCard.jsx
import React, { useState } from 'react';
import styles from './postCard.module.css';
import Image from 'next/image';

const PostCard = ({ post, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...post, quantity });
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image src={post.img} alt='' fill />
        </div>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.text}>{post.desc}</p>
        <div className={styles.action}>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min={1}
          />
          <button className={styles.orderButton} onClick={handleAddToCart}>
            Bestill kr {post.price}.-
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
