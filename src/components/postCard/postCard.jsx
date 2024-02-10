import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image src='https://cdn.discordapp.com/attachments/1205590313440383037/1205595479413624874/IMG_9537.jpg?ex=65d8f149&is=65c67c49&hm=b9fd9d158c169aaeb8b5c76e3b92e495d997dc222206a0e79faf34f9f8d7ea19&' alt='' fill/>
                </div>
                <span className={styles.date}>4.2.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Post Title</h1>
                <p className={styles.text}>Magna eu nisi nisi Lorem irure nisi aliqua eiusmod nostrud irure mollit ut incididunt.</p>
                <Link className={styles.link} href='/post/1'> Read more </Link>
            </div>
        </div>
    )
}

export default PostCard;