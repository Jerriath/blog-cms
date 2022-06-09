// Importing stylesheet
import './organisms.css';


// Importing necessary components
import PostCard from '../molecules/PostCard';


// Component that is being exported
const PostsSlider = (props) => {
    return(
        <section className='posts-slider' >
            <PostCard title='Example Title' preview='Do you think that there rea...' author='Jerriath' date={Date.now()} />
            <PostCard title='Example Title' preview='Do you think that there rea...' author='Jerriath' date={Date.now()} />
            <PostCard title='Example Title' preview='Do you think that there rea...' author='Jerriath' date={Date.now()} />
            <PostCard title='Example Title' preview='Do you think that there rea...' author='Jerriath' date={Date.now()} />
            <PostCard title='Example Title' preview='Do you think that there rea...' author='Jerriath' date={Date.now()} />
        </section>
    );
};


export default PostsSlider;