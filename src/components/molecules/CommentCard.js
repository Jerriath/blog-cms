// Importing stylesheet
import './molecules.css';


// Importing node modules
import moment from 'moment';


// Importing helper functions
import { deleteComment } from '../../apiCalls';


// Component that is being exported
const CommentCard = (props) => {

    // Function for deleting comment
    const onDelete = () => {
        deleteComment(props.id);
    }

    return(
        <article className='comment-card'>
            <div className='comment-content'>
                <form className='comment-name' onSubmit={onDelete} >
                    <h3>
                        {props.name}
                    </h3>
                    <button type='submit' className='comment-delete' >
                        X
                    </button>
                </form>
                <p className='comment-message'>
                    {props.message}
                </p>
                <footer className='comment-footer'>
                    <h4 className='footer-font'>
                        {moment(props.date).format('MM/DD/YYYY')}
                    </h4>
                </footer>
            </div>
        </article>
    );
};


export default CommentCard;