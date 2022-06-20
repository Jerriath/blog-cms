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
            <h2 className='old-header' >Unpublished Posts: </h2>
            {props.posts.map((post, index) => { return(
                <PostRow 
                    colorScheme={index%2 ? 'post-row-light' : 'post-row-dark'} 
                    key={index} 
                    title={post.title} 
                    date={post.date} 
                    id={post._id} 
                />)})
            }
        </section>
    );
};


export default OlderPosts;