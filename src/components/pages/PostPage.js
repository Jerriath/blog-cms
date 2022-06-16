// Importing stylesheet
import './pages.css';


// Importing necessary components
import Comments from '../organisms/Comments';


// Importing node modules
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import he from 'he';


//importing helper functions
import { getSinglePost, getComments } from '../../apiCalls';


// Page that is being exported
const PostPage = (props) => {

    const { id } = useParams();
    const [post, setPost ] = useState('');
    const [ comments, setcomments ] = useState([]);

    useEffect(() => {
        getSinglePost(id).then( retrievedPost => {
            retrievedPost.title = he.decode(retrievedPost.title);
            retrievedPost.content = he.decode(retrievedPost.content);
            setPost(retrievedPost);
        });
    }, []);
    useEffect(() => {
        getComments(id).then( retrievedcomments => {
            setcomments(retrievedcomments);
        });
    }, []);
    
    return (
        <main>
            <section className='post-section' >
                <article className='post-article' >
                    <h2>
                        {post.title}
                    </h2>
                    <p>
                        {post.content}
                    </p>
                </article>
            </section>
            <Comments comments={comments} postId={id} />
        </main>
    );
};


export default PostPage;