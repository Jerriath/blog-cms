// Importing stylesheet
import './organisms.css';


// Component that is being exported
const Header = () => {
    return(
        <header className='site-header' >
            <h1 className='header-font' >
                Poggy Bloggy
            </h1>
            <h2 className='header-anchor'>
                About
            </h2>
        </header>
    );
};


export default Header;