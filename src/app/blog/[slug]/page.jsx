import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { Menu } from "@/app/lib/models";
import { getPost, getUser } from "@/app/lib/data";
import { useRouter } from 'next/navigation'
import { NextResponse } from "next/server";

/**
 * DEPRECATED
 * @param slug
 * @returns {Promise<awaited Query<THydratedDocumentType, THydratedDocumentType, TQueryHelpers, TRawDocType, "findOne"> & TQueryHelpers|null>}
 */
// FETCH DATA WITH API
const getData = async (slug) => {
    const res = await fetch(process.env.NEXT_PUBLIC_BLOG_PATH, { method: 'GET'});
    if (!res.ok) {
        console.log("Something went wrong");
        return null;
    }

    return await Menu.findById(slug);
}


const SinglePost = async ({params}) => {

    const {slug} = params;

    // GET DATA WITH API
    const post = await getData(slug);
    console.log('post JSON', post);
    // GET DATA WITHOUT API
    //const post = await getPost(slug);
    //const user = await getUser(post.userId);

    //console.log ('post', post);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            <Image className={styles.img} src={post.img}
            fill 
            alt=""/>
            </div>
            <div className={styles.textContainer}>
                <Suspense fallback={<div>Loading...</div>}>
                    <h2 className={styles.title}>
                        {post.title}
                    </h2>
                </Suspense>
                <div className={styles.content}>
                    <div className={styles.text}>
                    {post && (
                    <Suspense fallback={<div>Loading...</div>}>
                        {post ? post.desc : "Couldn't find the post."}
                    </Suspense>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;