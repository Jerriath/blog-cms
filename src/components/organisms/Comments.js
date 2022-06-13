// Importing stylesheet
import './organisms.css';


// Importing necessary components 
import CommentCard from '../molecules/CommentCard';
import CommentForm from '../molecules/CommentForm';


// Mock comments array
const mockComments = [
    {
        name: 'Bobo',
        message: 'Wow what a great blog post. Now I understand temperature. Thanks!',
        post: '629f8f903de31e0e8f514312',
        date: Date.now(),
        _id: 111
    },
    {
        name: 'Bebe',
        message: 'Bonobo',
        post: '629f8f903de31e0e8f514312',
        date: Date.now(),
        _id: 222
    },
    {
        name: 'Baba',
        message: 'Bonobo',
        post: '629f8f903de31e0e8f514312',
        date: Date.now(),
        _id: 333
    },
    {
        name: 'Bubu',
        message: 'Bonobo',
        post: '629f8f903de31e0e8f514312',
        date: Date.now(),
        _id: 444
    }
]


// Component that is being exported
const Comments = (props) => {

    return(
        <section className='comments'>
            {mockComments.map( comment => {
                return <CommentCard key={comment._id} name={comment.name} message={comment.message} date={comment.date} />
            })}
        </section>
    );
};


export default Comments;