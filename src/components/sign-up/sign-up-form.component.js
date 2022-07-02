import {useState} from 'react';

import  {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'

const defaultFormFields = {
    fullName:'',
    email: '',
    password : '',
    confirmPassword : ''
}


const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {fullName, email, password, confirmPassword}= formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    const handleChange = (event) =>{
            const {name ,value} = event.target
            setFormFields({...formFields,[name]:value})
            console.log(event);
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (password !== confirmPassword) {
        alert('passwords do not match');
        return;
    }

    try {
        const {user} = await createAuthUserWithEmailAndPassword(email, password);

        await createUserDocumentFromAuth(user, {fullName});
        resetFormFields();

    console.log({user});
    }
    catch(error) {
        if(error.code === 'auth/email-already-in-use' ){
            alert('cannot create user, email already in use')
        }else{
        console.log('here is the ', error)
        }
    }
    }
    return(
        <div>
            <h1>Sign Up with your email and password </h1>
            <form onSubmit={handleSubmit}>
                {/* <label>Full Name</label> */}
                <FormInput 
                label="Full Name"
                inputOptions={{
                type:'text',
                required:true,
                onChange:{handleChange},
                name:'fullName',
                value:fullName 
                }}
                />

                {/* <label>Email</label>
                <FormInput  label="email" type='email' required onChange={handleChange} name='email' value={email}/>

                {/* <label>Password</label> */}
                {/* <FormInput  label="password" type='password' required onChange={handleChange} name='password' value={password}/> */}

                {/* <label>Confirm Password</label> */}
                {/* <FormInput  label="confirm password "type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/> */} 
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default SignUpForm;