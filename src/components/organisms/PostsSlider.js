// Importing stylesheet
import './organisms.css';


// Importing necessary components
import PostCard from '../molecules/PostCard';


// Importing node modules
import he from 'he';


// Component that is being exported
const PostsSlider = (props) => {

    let posts = props.posts;
    posts.forEach(element => {
        element.title = he.decode(element.title)
        element.content = he.decode(element.content);
    });

    return(
        <section className='posts-slider' >
            {props.posts.map(post => {
                return(
                    <PostCard 
                        key={post._id} 
                        title={post.title} 
                        date={post.date}
                        id={post._id} />)
                })
            }
        </section>
    );
};


export default PostsSlider;