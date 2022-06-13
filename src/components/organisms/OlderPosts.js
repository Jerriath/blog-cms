// Importing stylesheet
import './organisms.css';


// Importing necessary components
import PostRow from '../molecules/PostRow';


// Component that is being exported
const OlderPosts = (props) => {
    return(
        <section className='old-section' >
            <h1 className='old-header' >Older Posts</h1>
            {props.posts.map((post, index) => {return(<PostRow colorScheme={index%2 ? 'post-row-light' : 'post-row-dark'} key={index} title={post.title} date={post.date} />)})}
        </section>
    );
};


export default OlderPosts;