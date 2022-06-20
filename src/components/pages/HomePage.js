// Importing stylesheet
import './pages.css';


// Importing node modules
import { useState, useEffect } from 'react';


// Importing helper functions
import { getPosts } from '../../apiCalls';


// Importing necessary components
import OlderPosts from '../organisms/OlderPosts';
import PostsSlider from '../organisms/PostsSlider';
import HomeSplash from '../molecules/HomeSplash';


// Page that is being exported
const HomePage = () => {
    // Setting some states
    const [newPosts, setNewPosts] = useState([]);
    const [oldPosts, setOldPosts] = useState([]);

    useEffect(() => {
        getPosts().then((postsArray) => { 
            setNewPosts(postsArray[0]);
            setOldPosts(postsArray[1])
        });
    }, [])

    return (
        <main>
            <HomeSplash />
            <h2 className='posts-header' >
                Published Posts: 
            </h2>
            <PostsSlider posts={newPosts} />
            <OlderPosts posts={oldPosts} />
        </main>
    );
};


export default HomePage;