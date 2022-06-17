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

export const postComment = async (name, message, postId, date) => {
    const comment = {
        name,
        message,
        postId,
        date
    };
    await axios.post(`${process.env.REACT_APP_APIROOT}/comments/${postId}`, comment);
}

export const login = async (username, password) => {
    const signinInfo = {
        username,
        password
    };
    const userReturn = await axios.post(`${process.env.REACT_APP_APIROOT}/users/`, signinInfo);
    let expiration = new Date();
    expiration.setHours(expiration.getHours() + 2);
    localStorage.setItem('jwt', JSON.stringify(userReturn.data.token));
    localStorage.setItem('user', JSON.stringify(userReturn.data.user));
    localStorage.setItem('expiration', JSON.stringify(expiration));
    window.location.reload();
}

export const postMalone = async (title, content, published) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    const post = {
        title,
        content,
        published,

    };
    console.log(published);
    await axios.post(
        `${process.env.REACT_APP_APIROOT}/posts/create`,
        post,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
}

export const updatePost = () => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    const post = JSON.parse(localStorage.getItem('jwt'));
}

export const deletePost = () => {

}