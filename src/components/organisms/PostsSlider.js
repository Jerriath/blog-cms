// Importing stylesheet
import './organisms.css';


// Importing necessary components
import PostCard from '../molecules/PostCard';


// Mock array for holding post
const postsArray = [
    {title: 'Example Title', preview:'Do you think that there rea...', author:'Jerriath', date: Date.now() },
    {title: 'Example Title', preview:'Do you think that there rea...', author:'Jerriath', date: Date.now() },
    {title: 'Example Title', preview:'Do you think that there rea...', author:'Jerriath', date: Date.now() },
    {title: 'Example Title', preview:'Do you think that there rea...', author:'Jerriath', date: Date.now() },
    {title: 'Example Title', preview:'Do you think that there rea...', author:'Jerriath', date: Date.now() }
]


// Component that is being exported
const PostsSlider = (props) => {
    return(
        <section className='posts-slider' >
            {postsArray.map(post => {return(<PostCard title={post.title} preview={post.preview} author={post.author} date={post.date} />)})}
        </section>
    );
};


export default PostsSlider;