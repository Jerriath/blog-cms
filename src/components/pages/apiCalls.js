import axios from 'axios';

export const getPosts = async () => {
    let posts = (await axios.get(`${process.env.REACT_APP_APIROOT}/posts`)).data;
    posts = posts.posts;
    posts = posts.filter( post => {
        return post.published;
    })
    let newPosts = posts.slice(0, 5);
    let oldPosts = posts.slice(5);
    let postsArray = [newPosts, oldPosts];
    return postsArray;
}

export const getSinglePost = async (postId) => {
    let post = (await axios.get(`${process.env.REACT_APP_APIROOT}/posts/${postId}`)).data;
    post = post.post;
    return post;
}

export const getComments = async (postId) => {
    let comments = (await axios.get(`${process.env.REACT_APP_APIROOT}/comments/${postId}`)).data;
    comments = comments.comments;
    return comments;
}