// Importing stylesheet
import './App.css';


// Importing necessary node modules


// Importing necessary components
import Header from './components/organisms/Header';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import PostPage from './components/pages/PostPage';
import Footer from './components/organisms/Footer';


// Helper functions; eventually will put in dedicated file
const renderHomePage = () => {
    return (<HomePage />);
}


// Parent app object being rendered by index.js
const App = () => {


    return(
        <div className='app' >
            <Header />
            {renderHomePage()}
            <Footer />
        </div>
    );
};

export default App;
