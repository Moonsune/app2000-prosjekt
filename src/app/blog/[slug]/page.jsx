import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            <Image className={styles.img} src="https://i.ytimg.com/vi/wtbScEgNgMA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDNe7BBkF4Jzn9VAGUjpX7p1upouw"
            fill 
            alt=""/>
            </div>
            <div className={styles.textContainer}> 
                <div className={styles.title}>

                </div>
                <div className={styles.details}>
                    <Image className={styles.avatar} src="https://i.ytimg.com/vi/wtbScEgNgMA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDNe7BBkF4Jzn9VAGUjpX7p1upouw"
                    height={50}
                    width={50}
                    alt=""/>
                    <div className={styles.detailsText}>
                        <span className={styles.detailTitle}>Author: </span>
                        <span className={styles.detailValue}>David</span>
                    </div>
                    <div className={styles.detailsText}>
                        <span className={styles.detailTitle}>published </span>
                        <span className={styles.detailValue}>1 hour ago</span>
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>Magna eu nisi nisi Lorem irure nisi aliqua eiusmod nostrud irure mollit ut incididunt.</p>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;