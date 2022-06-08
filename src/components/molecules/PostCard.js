// Importing stylesheet
import './molecules.css';


// Component that is being exported
const PostCard = (props) => {
    return(
        <article className='post-card'>
            <div className='post-content'>
                <h3 className='post-title'>
                    {props.title}
                </h3>
                <p className='post-preview'>
                    {props.preview}
                </p>
                <footer className='post-footer'>
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


export default PostCard;