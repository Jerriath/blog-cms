// Importing stylesheet
import './organisms.css';


// Importing necessary components 
import CommentCard from '../molecules/CommentCard';
import CommentForm from '../molecules/CommentForm';


// Mock comments array
const mockComments = [
    {
        name: 'Bobo',
        message: 'Bonobo',
        post: '629f8f903de31e0e8f514312',
        date: Date.now(),
        _id: 111
    },
    {
        name: 'Bobo',
        message: 'Bonobo',
        post: '629f8f903de31e0e8f514312',
        date: Date.now(),
        _id: 222
    },
    {
        name: 'Bobo',
        message: 'Bonobo',
        post: '629f8f903de31e0e8f514312',
        date: Date.now(),
        _id: 333
    },
    {
        name: 'Bobo',
        message: 'Bonobo',
        post: '629f8f903de31e0e8f514312',
        date: Date.now(),
        _id: 444
    }
]


// Component that is being exported
const Comments = (props) => {

    return(
        <section>
            {mockComments.map( comment => {
                return <p key={comment._id} >{comment.message}</p>
            })}
        </section>
    );
};


export default Comments;