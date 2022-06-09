// Importing stylesheet
import './molecules.css';


// Component that is being exported
const HomeSplash = () => {
    return(
        <section className='splash-section'>
            <article className='splash-article'>
                <h2 className='splash-title header-font'>
                    Welcome to my Blog
                </h2>
                <p className='splash-content content-font'>
                    Check out how my mind works
                </p>
            </article>
        </section>
    );
};


export default HomeSplash;