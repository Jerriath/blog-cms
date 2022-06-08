// Importing stylesheet
import './molecules.css';


// Component that is being exported
const MessageCard = (props) => {
    return(
        <article className='message-card'>
            <div className='message-content'>
                <h3 className='message-title'>
                    {props.title}
                </h3>
                <p className='message-content'>
                    {props.content}
                </p>
                <footer className='message-footer'>
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


export default MessageCard;