// Importing stylesheet
import './pages.css';


// Importing necessary components
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';


// Importing node modules
import { useEffect, useState } from 'react';


//importing helper functions
import { login } from '../../apiCalls';


// Page that is being exported
const SigninPage = (props) => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    
    const onUserChange = event => {
        setUser(event.target.value);
    }
    const onPassChange = event => {
        console.log(event.target.value);
        setPass(event.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        login(user, pass);
    }
    
    return (
        <main>
            <section className='signin-section'>
                <form onSubmit={onSubmit} id='signinForm' >
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