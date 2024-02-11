"use client";

import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PostCard = ({post}) => {
    const router = useRouter();

    const handleClick = () => {
        console.log('clicked');
    }

    console.log (post.slug)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image src='https://cdn.discordapp.com/attachments/1205590313440383037/1205595479413624874/IMG_9537.jpg?ex=65d8f149&is=65c67c49&hm=b9fd9d158c169aaeb8b5c76e3b92e495d997dc222206a0e79faf34f9f8d7ea19&' alt='' fill/>
                </div>
                <span className={styles.date}>4.2.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.text}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post._id}`} onClick={console.log(post._id)}> Read more </Link>
            </div>
        </div>
    )
}

export default PostCard;