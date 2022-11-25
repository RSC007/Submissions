import React from 'react'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignIn } from '../../Redux/usersSlice';

// constants 
const initialValues = {
  email: "",
  password: ""
}

const SignIn = () => {

  const navigate = useNavigate()
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  console.log("state", state);

  const { handleSubmit, handleChange, handleBlur, 
    values: { email, password },
    errors: { email: errEmail, password: errPassword } 
  } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
        dispatch(userSignIn(values))
        navigate("/")
    },
  });
  return (
    <div className='body sign-up-page'>
      <div className='title'>
        <p>Sign In</p>
        <small>Please enter the below details to sign in to your account.</small>
      </div>
      <div className='field'>
        <label className='field-label' htmlFor="email">Email</label>
        <input className={`field-input ${errEmail ? "invalid" : ""}`} name='email' type="email" onChange={handleChange} onBlur={handleBlur} value={email} />
      </div>
      <div className='field'>
        <label className='field-label' htmlFor='password'>Password</label>
        <input className={`field-input ${errPassword ? "invalid" : ""}`} name='password' type="password" onChange={handleChange} onBlur={handleBlur} value={password} />
      </div>
      <div className='field sign-up mt-3'>
        <button className='sign-up-btn w-100' onClick={handleSubmit}>Sign In</button>
        <small className='terms-condition'>Don't have an account? <u><b onClick={() => navigate("/signup")}>Sign Up</b></u></small>
      </div>
    </div>
  )
}

export default SignIn