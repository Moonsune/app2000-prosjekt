import { connectToDb } from "./connectToDb";
import { Post } from "./models";
import { User } from "./models";

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
        
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch posts');
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb();
        console.log('slug', slug);
        const post = await Post.findById({slug});
        return post;
        
    } catch (error) {
        console.log(error);
        throw new Error('Error getting post');
    }
}

export const getUser = async (id) => {
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
        
    } catch (error) {
        console.log(error);
        throw new Error('Error getting user');
    }
}

export const getUsers = async () => {
    try {
        connectToDb();
        const user = await User.find();
        return user;
        
    } catch (error) {
        console.log(error);
        throw new Error('Error getting user');
    }
}
