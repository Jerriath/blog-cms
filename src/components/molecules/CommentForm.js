// Importing stylesheet
import './molecules.css'


// Importing necessary components
import Button from '../atoms/Button';
import TextArea from '../atoms/TextArea';
import TextInput from '../atoms/TextInput';


// Helper functions needed by component



// Component that is being exported
const CommentForm = (props) => {
    return(
        <article className='comment-form'>
            <form onSubmit={null}>
                <TextInput label='Name: ' onChange={() => null} value='' />
                <TextArea label='Leave a Comment: ' onChange={() => null} value='' placeHolder='Share what you think...' />
                <Button text='Submit' callback={() => null} />
            </form>
        </article>
    );
};


export default CommentForm;