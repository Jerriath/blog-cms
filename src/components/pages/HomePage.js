// Importing stylesheet
import './pages.css';


// Importing node modules
import { useState, useEffect } from 'react';


// Importing helper functions
import { getPosts } from './apiCalls';


// Importing necessary components
import OlderPosts from '../organisms/OlderPosts';
import PostsSlider from '../organisms/PostsSlider';
import HomeSplash from '../molecules/HomeSplash';


// Page that is being exported
const HomePage = () => {
    // Setting some states
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log(process.env.REACT_APP_APIROOT);
        getPosts().then((newPosts) => { console.log(newPosts); setPosts(newPosts) });
    }, [])

    return (
        <main>
            <HomeSplash />
            <PostsSlider posts={posts} />
            <OlderPosts />
        </main>
    );
};


export default HomePage;