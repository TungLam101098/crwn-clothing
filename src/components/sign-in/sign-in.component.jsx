import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

const SignIn = () => {
  const [valueSigin, setValueSigin] = useState({
    email: '',
    password: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleChange = (name, value) => {
    setValueSigin({...valueSigin, [name]: value})
  }
  return (
    <div className='sign-in'>
      <h2>I already have a account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput name='email' type='email' value={valueSigin.email} label="email" handleChange={e => handleChange(e.target.name, e.target.value)} required />
        <FormInput name='password' type='password' value={valueSigin.password} label="password" handleChange={e => handleChange(e.target.name, e.target.value)} required />
        <div className='buttons'>
          <CustomButton type='submit' > Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn >{' '}Sign in with Google{' '}</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
