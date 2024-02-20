import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import { getPosts } from '../lib/data'

// FETCH DATA WITH API
const getData = async () => {
    const res = await fetch(process.env.BLOG_PATH, {method: 'GET'});
    if (!res.ok) {
        console.log ("something went wrong");
        return null;
    }  
    return res.json();
}


const BlogPage = async () => {

    // FETCH DATA WITH AN API
    const posts = await getData();
    console.log(posts);
    // FETCH DATA WITHOUT AN API
    //const posts = await getPosts();
    
    // newPost();

    return (
      <div className={styles.container}>
        {posts.map((post) => (
          <div className={styles.post} key={post.slug}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    );
  };

export default BlogPage;