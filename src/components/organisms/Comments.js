// Importing stylesheet
import './organisms.css';


// Importing necessary components 
import CommentCard from '../molecules/CommentCard';
import CommentForm from '../molecules/CommentForm';


// Component that is being exported
const Comments = (props) => {
    return(
        <section>
            {props.comments.map( message => {
                <p key={message._id} >{message.content}</p>
            })}
        </section>
    );
};


export default Comments;