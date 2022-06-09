import axios from 'axios';

export const getPosts = async () => {
    let posts = (await axios.get(`${process.env.REACT_APP_APIROOT}/posts`)).data;
    posts = posts.posts;
    let newPosts = posts.slice(0, 5);
    let oldPosts = posts.slice(5);
    let postsArray = [newPosts, oldPosts];
    return postsArray;
}