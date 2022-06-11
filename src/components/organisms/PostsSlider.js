// Importing stylesheet
import './organisms.css';


// Importing necessary components
import PostCard from '../molecules/PostCard';


// Component that is being exported
const PostsSlider = (props) => {
    return(
        <section className='posts-slider' >
            {props.posts.map(post => {
                return(
                    <PostCard 
                        key={post._id} 
                        title={post.title} 
                        preview={post.content.length > 25 ? `${post.content.slice(0, 25)}...` : post.content} 
                        author={post.user.username} 
                        date={post.date}
                        id={post._id} />)
                })
            }
        </section>
    );
};


export default PostsSlider;