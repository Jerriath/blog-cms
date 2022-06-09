// Importing stylesheet
import './pages.css';


// Importing necessary components
import OlderPosts from '../organisms/OlderPosts';
import PostsSlider from '../organisms/PostsSlider';
import HomeSplash from '../molecules/HomeSplash';


// Page that is being exported
const HomePage = () => {
    return (
        <main>
            <HomeSplash />
            <PostsSlider />
            <OlderPosts />
        </main>
    );
};


export default HomePage;