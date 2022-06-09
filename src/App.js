// Importing stylesheet
import './App.css';


// Importing necessary node modules


// Importing necessary components
import Header from './components/organisms/Header';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import PostPage from './components/pages/PostPage';
import Footer from './components/organisms/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Parent app object being rendered by index.js
const App = () => {


    return(
        <Router>
            <div className='app' >
                <Header />
                <Routes>
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/post' element={<PostPage />} />
                    <Route path='/' element={<HomePage />} />
                </Routes>
                <Footer />
            </div>            
        </Router>

    );
};

export default App;
