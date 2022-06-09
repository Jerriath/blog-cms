// Importing stylesheet
import './organisms.css';


// Importing necessary components
import PostRow from '../molecules/PostRow';


// Mock array for holding post
const postsArray = [
    {title: 'Example Title', date: Date.now() },
    {title: 'Example Title', date: Date.now() },
    {title: 'Example Title', date: Date.now() },
    {title: 'Example Title', date: Date.now() },
    {title: 'Example Title', date: Date.now() }
]


// Component that is being exported
const OlderPosts = (props) => {
    return(
        <section className='old-section' >
            <h1 className='old-header' >Older Posts</h1>
            {postsArray.map((post, index) => {return(<PostRow colorScheme={index%2 ? 'post-row-light' : 'post-row-dark'} title={post.title} date={post.date} />)})}
        </section>
    );
};


export default OlderPosts;