// Importing stylesheet
import './molecules.css';


// Importing node modules
import moment from 'moment';
import { Link } from 'react-router-dom';


// Component that is being exported
const PostCard = (props) => {
    return(
        <Link to={`/posts/${props.id}`} className='post-card'>
            <div className='post-content'>
                <h3 className='post-title'>
                    {props.title}
                </h3>
                <footer className='post-footer'>
                    <h4 className='footer-font'>
                        {moment(props.date).format('MM/DD/YYYY')}
                    </h4>
                </footer>
            </div>
        </Link>
    );
};


export default PostCard;