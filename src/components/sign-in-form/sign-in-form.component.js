import {useState, useContext} from 'react';


import FormInput from '../form-input/form-input.component'


import Button , {BUTTON_TYPE_CLASSES} from '../button/button.component';

import "./sign-in-form.styles.scss";

import { UserContext } from '../../contexts/user.context';



import  {signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'


const defaultFormFields = {
    email: '',
    password : ''
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password}= formFields;

    const {setCurrentUser} =useContext(UserContext)


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
/// sign in with google pop up method firebase utilden geliyor?
    const signInWithGoogle =async () => {
        const {user} =await signInWithGooglePopup();
        setCurrentUser(user);
        console.log(user);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();


    try {
        const {user} =await signInAuthUserWithEmailAndPassword(email,password);
        
        resetFormFields();
        setCurrentUser(user);
    }catch(error) {
        switch(error.code){
            ///switch statement allows me to do :is run code depending on what gets matched inside of code
            case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
            ///the break essentially says that once you have found a match, dont check the next subsequent cases.
            case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
            default:
                console.log(error)
        }
    }
}
    const handleChange = (event) => {
        const {name ,value} = event.target;
        setFormFields({...formFields, [name]:value})
        console.log(event);
};
    return (
        <div className='sign-in-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
            />

            <FormInput
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
            />
            <div className='buttons-container'>
            <Button type='submit'>Sign In</Button>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.google}
                type='button'
                onClick={signInWithGoogle}
            >
                Sign In With Google
            </Button>
            </div>
        </form>
    </div>
);
};

export default SignInForm;