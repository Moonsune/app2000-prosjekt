import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import { getPosts } from '../lib/data'

const BlogPage = async () => {

    // FETCH DATA WITH AN API
    //const posts = await getData();
  
    // FETCH DATA WITHOUT AN API
    const posts = await getPosts();
    
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