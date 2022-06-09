// Importing stylesheet
import './organisms.css';


// Component that is being exported
const Header = () => {
    return(
        <header className='site-header' >
            <h1 className='header-logo' >
                Poggy Bloggy
            </h1>
            <h2>
                About
            </h2>
        </header>
    );
};


export default Header;