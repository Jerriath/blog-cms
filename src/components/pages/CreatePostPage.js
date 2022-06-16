// Importing stylesheet
import './pages.css';


// Importing necessary components
import Comments from '../organisms/Comments';


// Importing node modules
import { useEffect, useState } from 'react';


//importing helper functions
import { postMalone } from '../../apiCalls';
import TextInput from '../atoms/TextInput';
import TextArea from '../atoms/TextArea';
import Button from '../atoms/Button';
import { useNavigate } from 'react-router-dom';


// Page that is being exported
const PostPage = (props) => {

    let navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [published, setPublished] = useState(false);

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const onContentChange = (e) => {
        setContent(e.target.value);
    }
    const onPublishedChange = (e) => {
        setPublished(e.target.checked);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await postMalone(title, content, published);
        navigate('/');
    }
    
    return (
        <main>
            <section className='create-section' id='postForm' >
                <h2>Create A New Post</h2>
                <form onSubmit={onSubmit}>
                    <TextInput label='Title: ' handleChange={onTitleChange} value={title} placeHolder='Enter a title...' />
                    <TextArea label='Content: ' handleChange={onContentChange} value={content} placeHolder='Spill your brain...' />
                    <fieldset className='publish-field'>
                        <label htmlFor='post' >Publish? </label>
                        <input type='checkbox' value={published} onClick={onPublishedChange} name='post' />                        
                    </fieldset>
                    <Button text='Submit' type='' onClick={onSubmit} form='postForm' />
                </form>
            </section>
        </main>
    );
};


export default PostPage;