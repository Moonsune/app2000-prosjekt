"use client";

import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PostCard = ({post}) => {
    //const router = useRouter();

    console.log (post.slug)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image src='https://cdn.discordapp.com/attachments/1177056771303538778/1226334776798216294/IMG_1755.jpg?ex=66246442&is=6611ef42&hm=acdeb427e1a77524734704d5e260c42653e4299bcf2846480b78fba8fbc21a6e&' alt='' fill/>
                </div>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.text}>{post.desc}</p>

                {
                    //TODO: skal legge inn i handlekurv når du trykker "Bestill")
                }
                <button className={styles.link}> Bestill </button>
            </div>
        </div>
    )
}

export default PostCard;