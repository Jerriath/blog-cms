// Importing stylesheet
import './molecules.css'


// Importing necessary components
import Button from '../atoms/Button';
import TextArea from '../atoms/TextArea';
import TextInput from '../atoms/TextInput';


// Importing node modules
import { useState } from 'react';


// Helper functions needed by component
import { postComment } from '../../apiCalls';


// Component that is being exported
const CommentForm = (props) => {

    const [input, setInput] = useState('');
    const [area, setArea] = useState('');


    const onInputChange = (event) => {
        console.log(event.target.value);
        setInput(event.target.value)
    };
    const onAreaChange = (event) => {
        console.log(event.target.value);
        setArea(event.target.value);
    };
    const onSubmit = () => {
        postComment(input, area, props.postId, Date.now())
    }


    return(
        <article className='comment-form' id='commentForm'>
            <form onSubmit={onSubmit}>
                <TextInput label='Name: ' handleChange={onInputChange} value={input} placeHolder='Whats your name?' />
                <TextArea label='Leave a Comment: ' handleChange={onAreaChange} value={area} placeHolder='Share what you think...' />
                <Button text='Submit' type='submit' form='commentForm' />
            </form>
        </article>
    );
};


export default CommentForm;