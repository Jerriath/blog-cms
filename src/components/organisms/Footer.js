// Importing stylesheet
import './organisms.css';


// Component that is being exported
const Footer = () => {
    return(
        <footer className='site-footer' >
            <h3>Check out my github &#8594;<a target='_blank' className='footer-link github' href='https://www.github.com/Jerriath' ></a>&#8592;</h3>
            <h3>Check out the repo &#8594;<a target='_blank' className='footer-link' href='https://www.github.com/Jerriath/blog-client' >😀</a>&#8592;</h3>
        </footer>
    );
};


export default Footer;