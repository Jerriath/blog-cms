// Importing stylesheet
import './pages.css';


// Importing necessary components
import Comments from '../organisms/Comments';
import TextInput from '../atoms/TextInput';
import TextArea from '../atoms/TextArea';
import Button from '../atoms/Button';


// Importing node modules
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import he from 'he';


//importing helper functions
import { getSinglePost, getComments, updatePost, deletePost } from '../../apiCalls';


// Page that is being exported
const PostPage = (props) => {
    // States needed for page to render correctly
    const { id } = useParams();
    const [ comments, setcomments ] = useState([]);

    // States used for editing inputs
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [published, setPublished] = useState(false);

    // Hooks for retrieving data from database
    useEffect(() => {
        getSinglePost(id).then( retrievedPost => {
            retrievedPost.title = he.decode(retrievedPost.title);
            retrievedPost.content = he.decode(retrievedPost.content);
            setTitle(retrievedPost.title);
            setContent(retrievedPost.content);
            setPublished(retrievedPost.published);
        });
    }, []);
    useEffect(() => {
        getComments(id).then( retrievedcomments => {
            setcomments(retrievedcomments);
        });
    }, []);

    // Functions for updating these states
    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const onContentChange = (e) => {
        setContent(e.target.value);
    }
    const onPublishedChange = (e) => {
        setPublished(e.target.checked);
    }

    // Functions for making api calls
    const onUpdate = () => {
        updatePost(title, content, published, id);
    }
    const onDelete = () => {
        deletePost(id);
    }
    
    return (
        <main>
            <section className='post-section' >
                <form onSubmit={null} >
                    <TextInput label='Title: ' value={title} handleChange={onTitleChange} />
                    <TextArea label='Content: ' value={content} handleChange={onContentChange} />
                    <fieldset className='publish-field'>
                        <label htmlFor='post' >Publish? </label>
                        <input type='checkbox' checked={published} onClick={onPublishedChange} name='post' />                        
                    </fieldset>
                    <div>
                        <Button text='Update' callback={onUpdate} />
                        <Button text='Delete' callback={null} />                        
                    </div>
                </form>
                <article className='post-article' >
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {content}
                    </p>
                </article>
            </section>
            <Comments comments={comments} postId={id} />
        </main>
    );
};


export default PostPage;