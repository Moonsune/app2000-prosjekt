// Laget av Markus Moen Magnussen

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/components/createMenuItem/createMenuItemPreview/CreateMenuItemPrview.module.css';

const CreateMenuItemPreview = ({ post }) => {
    const [imgError, setImgError] = useState(false);

    const imageValidation = (src) => {
        if (src && (src.startsWith('http') || src.startsWith('https'))) {
            return src;
        } else {
            return process.env.NEXT_PUBLIC_IMG;
        }
    }

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
                    <button className={styles.priceLarge}>Stor kr {post.priceLarge}.-</button>
                    <button className={styles.priceSmall}>Liten kr {post.priceSmall}.-</button>
                </div>
            </div>
        </div>
    );
};

export default CreateMenuItemPreview;
