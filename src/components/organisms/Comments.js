// Importing stylesheet
import './organisms.css';


// Importing necessary components 
import CommentCard from '../molecules/CommentCard';
import CommentForm from '../molecules/CommentForm';


// Component that is being exported
const Comments = (props) => {

    return(
        <section className='comments'>
            <CommentForm postId={props.postId} />
            {props.comments.map( comment => {
                return <CommentCard key={comment._id} name={comment.name} message={comment.message} date={comment.date} />
            })}
        </section>
    );
};


export default Comments;