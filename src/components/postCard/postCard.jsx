// Laget av Markus Moen Magnussen

"use client";

import styles from './postCard.module.css';


import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PostCard = ({post}) => {
    //const router = useRouter();

    console.log (post.img)

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>

                    <Image src={post.img} alt='' fill/>
                </div>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.text}>{post.desc}</p>

                {
                    //TODO: skal legge inn i handlekurv når du trykker "Bestill")
                }
                <div className={styles.priceDiv}>
                    <button className={styles.priceLarge} >Stor kr {post.priceLarge}.- </button>
                    <button className={styles.priceSmall} >Liten kr {post.priceSmall}.- </button>
                </div>
            </div>
        </div>
    )
}

export default PostCard;