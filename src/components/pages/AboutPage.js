// Importing stylesheet
import './pages.css';


// Importing necessary components



// Page that is being exported
const AboutPage = () => {
    return(
        <main>
            <section className='about-section'>
                <article className='about-article'>
                    <h2 className='about-title'>
                        {'Hi, my name is Jerry :).'}
                    </h2>
                    <p className='about-content'>
                        I am self taught, Javascript web developer with a degree in physics. At the time of creating this blog application, I was 
                        working on a free, online webdev curriculum known as "The Odin Project." I am very interested in random facts from all 
                        different kinds of fields from physics (obviously) to psychology to even culinary. I am an avid supporter of the idea that
                        everyone should exercise and strive to be a healthy, but more importantly, happy person. 
                    </p>
                </article>
            </section>
        </main>
    );
};


export default AboutPage;