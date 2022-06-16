// Importing stylesheet
import './organisms.css';


// Importing necessary components 
import CommentCard from '../molecules/CommentCard';
import CommentForm from '../molecules/CommentForm';


// Importing node modules
import he from 'he';


// Component that is being exported
const Comments = (props) => {

    let comments = props.comments;
    comments.forEach(element => {
        element.name = he.decode(element.name);
        element.message = he.decode(element.message);   
    });

    return(
        <section className='comments'>
            <CommentForm postId={props.postId} />
            {comments.map( comment => {
                return <CommentCard key={comment._id} name={comment.name} message={comment.message} date={comment.date} />
            })}
        </section>
    );
};


export default Comments;