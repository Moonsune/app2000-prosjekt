// Laget av Markus Moen Magnussen

"use client";

import styles from './menuCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const  PostCard = ({post}) => {
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
            <button className={styles.button}>Bestill</button>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.text}>{post.desc}</p>

                {
                    //TODO: skal legge inn i handlekurv når du trykker "Bestill")
                }
                <button className={styles.link} > kr {post.price}.- </button>
            </div>
        </div>
    )
}

export default PostCard;