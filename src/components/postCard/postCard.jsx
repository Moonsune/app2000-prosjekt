import styles from './postCard.module.css';
import Image from 'next/image';

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image src='/vercel.svg' alt=''/>
                </div>
                <span className={styles.date}>4.2.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Post Title</h1>
                <p className={styles.text}>Post text</p>
            </div>
        </div>
    )
}

export default PostCard;