import styles from './blog.module.css'

const SinglePostPage = () => {
    return (
        <div 
        className={styles.container}>
            <postCard />
            <postCard />
            <postCard />
            <postCard />
        </div>
    )
    };

export default SinglePostPage;