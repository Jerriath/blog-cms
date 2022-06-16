// Importing stylesheet
import './App.css';


// Importing necessary node modules
import { useState, useEffect } from 'react';


// Importing necessary components
import Header from './components/organisms/Header';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import PostPage from './components/pages/PostPage';
import CreatePostPage from './components/pages/CreatePostPage';
import SigninPage from './components/pages/SigninPage';
import Footer from './components/organisms/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Parent app object being rendered by index.js
const App = () => {

    const [authorization, setAuthorization] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('jwt'))
        {
            setAuthorization(true);
        }
    })

    return(
        <Router>
            <div className='app' >
                <Header />
                <Routes>
                    <Route path='/about' element={authorization ? <AboutPage /> : <SigninPage /> } />
                    <Route path='/posts/create' element={authorization ? <CreatePostPage /> : <SigninPage />} />
                    <Route path='/posts/:id' element={authorization ? <PostPage /> : <SigninPage />} />
                    <Route path='/' element={authorization ? <HomePage /> : <SigninPage />} />
                </Routes>
                <Footer />
            </div>            
        </Router>

    );
};

export default App;
