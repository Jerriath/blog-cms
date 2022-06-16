// Importing stylesheet
import './organisms.css';


// Importing necessary components
import PostRow from '../molecules/PostRow';


// Importing node modules
import he from 'he';


// Component that is being exported
const OlderPosts = (props) => {

    let posts = props.posts;
    posts.forEach(element => {
        element.title = he.decode(element.title)
        element.content = he.decode(element.content);
    });

    return(
        <section className='old-section' >
            <h1 className='old-header' >Older Posts</h1>
            {props.posts.map((post, index) => {return(<PostRow colorScheme={index%2 ? 'post-row-light' : 'post-row-dark'} key={index} title={post.title} date={post.date} />)})}
        </section>
    );
};


export default OlderPosts;