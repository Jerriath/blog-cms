// Importing stylesheet
import './molecules.css';


// Importing node modules
import moment from 'moment';


// Component that is being exported
const CommentCard = (props) => {
    return(
        <article className='comment-card'>
            <div className='comment-content'>
                <h3 className='comment-name'>
                    {props.name}
                </h3>
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