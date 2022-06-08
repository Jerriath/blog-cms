// Importing stylesheet
import './pages.css';


// Importing necessary components
import Posts from '../organisms/Posts';
import HomeSplash from '../molecules/HomeSplash';


// Page that is being exported
const HomePage = () => {
    return (
        <main>
            <HomeSplash />
            <Posts />
        </main>
    );
};


export default HomePage;