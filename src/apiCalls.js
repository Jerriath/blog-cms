import axios from 'axios';

export const getPosts = async () => {
    let posts = (await axios.get(`${process.env.REACT_APP_APIROOT}/posts`)).data;
    posts = posts.posts;
    let published = posts.filter( post => {
        return post.published;
    })

    let unpublished = posts.filter( post => {
        return !post.published;
    })
    let postsArray = [published, unpublished];
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
    console.log(userReturn);
    window.location.reload();
}

export const postMalone = async (title, content, published) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    const post = {
        title,
        content,
        published,

    };
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

export const updatePost = async (title, content, published, id) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    const post = {
        title, 
        content,
        published
    };
    await axios.put(
        `${process.env.REACT_APP_APIROOT}/posts/${id}`,
        post,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    window.location.reload();
}

export const deletePost = async (id, navigate) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    await axios.delete(
        `${process.env.REACT_APP_APIROOT}/posts/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    await navigate('/');
}

export const deleteComment = async (id) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    await axios.delete(
        `${process.env.REACT_APP_APIROOT}/comments/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    window.location.reload();
}