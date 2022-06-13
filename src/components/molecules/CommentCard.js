// Importing stylesheet
import './molecules.css';


// Component that is being exported
const CommentCard = (props) => {
    return(
        <article className='comment-card'>
            <div className='comment-content'>
                <h3 className='comment-title'>
                    {props.title}
                </h3>
                <p className='comment-content'>
                    {props.content}
                </p>
                <footer className='comment-footer'>
                    <h4 className='footer-font'>
                        {props.author}
                    </h4>
                    <p classname='footer-font'>
                        {props.date}
                    </p>
                </footer>
            </div>
        </article>
    );
};


export default CommentCard;