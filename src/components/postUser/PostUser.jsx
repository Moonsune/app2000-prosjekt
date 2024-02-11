import { Suspense } from "react";
import styles from "./postUser.module.css";

// FETCH DATA WTITH API
//const getData = async (userId) => {
//    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"});
//    if (!res.ok) {
//        throw new Error("Something went wrong");
//    }
//
//    return res.json();
//}

const PostUser = async ({userId}) => {

    // GET DATA WITH API
    //const user = await getData(userId);

    // GET DATA WITHOUT API
    const user = await getUser(userId);

    return (
        <div>
            <div className={styles.container}>
                <Suspense fallback={<div>Loading...</div>}>
                    <span className={styles.title}>Author</span>
                    <span className={styles.username}>{user ? user.username: "Username Missing"}</span>
                </Suspense>
            </div>
        </div>
    );
}

export default PostUser;