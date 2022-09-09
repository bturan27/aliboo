import {useState} from 'react';
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component';


import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";


import "./sign-up-form.styles.scss";




const defaultFormFields = {
    fullName:'',
    email: '',
    password : '',
    confirmPassword : ''
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {fullName, email, password, confirmPassword} = formFields;


    console.log('hit');
    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (password !== confirmPassword) {
        alert('passwords do not match');
        return;
        }
    
        try {
        const { user } = await createAuthUserWithEmailAndPassword(
            email,
            password
        );
    
        await createUserDocumentFromAuth(user, { fullName });
        resetFormFields();
        } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
        } else {
            console.log('user creation encountered an error', error);
        }
        }
    };

    const handleChange = (event) =>{
        const {name ,value} = event.target
        setFormFields({...formFields,[name]:value})
}
    return(
        <div className='sign-up-container'>
            <h2>Do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                {/* <label>Full Name</label> */}
                <FormInput 
                label='Full Name'
                type='text'
                required
                onChange={handleChange}
                name='fullName'
                value={fullName} 
                />
                <FormInput 
                label="Email"
                type='text'
                required
                onChange={handleChange}
                name='email'
                value={email} 
                />
                <FormInput 
                label="password"
                type='password'
                required
                onChange={handleChange}
                name='password'
                value={password} 
                />
                <FormInput 
                label="confirm password"
                type='password'
                required
                onChange={handleChange}
                name='confirmPassword'
                value={confirmPassword} 
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;