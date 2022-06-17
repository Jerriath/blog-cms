// Importing stylesheet
import './pages.css';


// Importing necessary components
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';


// Importing node modules
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


//importing helper functions
import { login } from '../../apiCalls';


// Page that is being exported
const SigninPage = (props) => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    
    const onUserChange = event => {
        setUser(event.target.value);
    }
    const onPassChange = event => {
        setPass(event.target.value);
    }
    const onLogin = (e) => {
        e.preventDefault();
        login(user, pass);
    }
    
    // Essentially I want to have a post form and have that render instead of the post so I can edit; buttons will be there to update and delete

    return (
        <main>
            <section className='signin-section'>
                <form onSubmit={onLogin} id='signinForm' >
                    <TextInput label='Username: ' handleChange={onUserChange} value={user} placeHolder='Username...' />
                    <TextInput type='password' label='Password: ' handleChange={onPassChange} value={pass} placeHolder='Password...' />
                    <h2>Check out the Blog client instead <a href=''>here</a></h2>
                    <Button text='Submit' type='submit' form='signinForm' />
                </form>
            </section>
        </main>
    );
};


export default SigninPage;