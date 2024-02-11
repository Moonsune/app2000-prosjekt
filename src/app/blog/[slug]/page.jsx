import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/app/lib/data";


// FETCH DATA WITH API
/*const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
}
*/

const SinglePost = async ({params}) => {


    const {slug} = params;

    // GET DATA WITH API
    //const post = await getData(slug);

    // GET DATA WITHOUT API
    const post = await getPost(slug);

    console.log (post);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            <Image className={styles.img} src="https://i.ytimg.com/vi/wtbScEgNgMA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDNe7BBkF4Jzn9VAGUjpX7p1upouw"
            fill 
            alt=""/>
            </div>
            <div className={styles.textContainer}> 
                <h2 className={styles.title}>
                    {post.title}
                </h2>
                <div className={styles.details}>
                    <Image className={styles.avatar} src="https://i.ytimg.com/vi/wtbScEgNgMA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDNe7BBkF4Jzn9VAGUjpX7p1upouw"
                    height={50}
                    width={50}
                    alt=""/>
                    {post && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId = {post.userId}/> 
                    </Suspense>
                    )}
                    <div className={styles.detailsText}>
                        <span className={styles.detailTitle}>published </span>
                        <span className={styles.detailValue}>1 hour ago</span>
                    </div>

                </div>
                <div className={styles.content}>
                    <p className={styles.text}>{post.body}</p>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;