// Importing stylesheet
import './organisms.css';
import { Link } from 'react-router-dom';


// Component that is being exported
const Header = () => {
    return(
        <header className='site-header' >
            <Link className='header-font header-content' to='/'>
                <h1>
                    Poggy Bloggy
                </h1>            
            </Link>
            <Link className='header-anchor header-content' to='/about'>
                <h2>
                    About
                </h2>            
            </Link>
            <Link className='header-anchor header-content' to='/posts/create'>
                <h2>
                    Create a New Post
                </h2>            
            </Link>
        </header>
    );
};


export default Header;