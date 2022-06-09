// Importing stylesheet
import './App.css';


// Importing necessary node modules
import { useState, useEffect } from 'react';


// Importing necessary components
import Header from './components/organisms/Header';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import PostPage from './components/pages/PostPage';
import Footer from './components/organisms/Footer';
import PostCard from './components/molecules/PostCard'


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
            <PostCard title='Example Title' preview='Do you think that there rea...' author='Jerriath' date={Date.now()} />
            <Footer />
        </div>
    );
};

export default App;
