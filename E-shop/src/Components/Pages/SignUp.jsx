import React from 'react'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"


import { userSignUp } from '../../Redux/usersSlice';

// constant 
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isSuscribe: false
}

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { handleSubmit, handleChange, handleBlur,
    values: {
      firstName,
      lastName,
      email,
      password,
      isSuscribe
    },
    errors: {
      firstName: errFirstName,
      lastName: errLastName,
      email: errEmail,
      password: errPassword
    } } = useFormik({
      initialValues,
      validationSchema: Yup.object({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.mixed().required(),
      }),
      onSubmit: (values) => {
          dispatch(userSignUp(values))
          navigate("/")
      },
    });

  return (
    <div className='body sign-up-page'>
      <div className='title'>
        <p>Sign Up</p>
        <small>Enjoy the great benefits and exclusive offers by creating your account.</small>
      </div>
      <div className='field'>
        <label className='field-label' htmlFor="firstName">First Name</label>
        <input className={`field-input ${errFirstName ? 'invalid' : ''}`} name="firstName" type="text" onChange={handleChange} onBlur={handleBlur} value={firstName} />
      </div>
      <div className='field'>
        <label className='field-label' htmlFor="lastName">Last Name</label>
        <input className={`field-input ?${errLastName ? 'invalid' : ''}`} name="lastName" type="text" onChange={handleChange} onBlur={handleBlur} value={lastName} />
      </div>
      <div className='field'>
        <label className='field-label' htmlFor="email">Email</label>
        <input className={`field-input ${errEmail ? "invalid" : ""}`} name='email' type="email" onChange={handleChange} onBlur={handleBlur} value={email} />
      </div>
      <div className='field'>
        <label className='field-label' htmlFor='password'>Password</label>
        <input className={`field-input ${errPassword ? "invald" : ""}`} name='password' type="password" onChange={handleChange} onBlur={handleBlur} value={password} />
      </div>
      <div className='field accept'>
        <input className='field-input' name='isSuscribe ' type="checkbox" onChange={handleChange} onBlur={handleBlur} value={isSuscribe} />
        <label className='field-label' htmlFor='isSuscribe'>Suscribe to news and updates</label>
      </div>
      <div className='field'>
        <small className='terms-condition'>By clicking Sign Up, you are agree to our <u><b>Terms and Conditions</b></u> and <u><b>Privacy Statement.</b></u></small>
      </div>
      <div className='field sign-up'>
        <button className='sign-up-btn w-100' type='submit' onClick={handleSubmit}>Sign Up</button>
        <small className='terms-condition'>Already have an account? <u><b onClick={() => navigate("/signin")}>Sign In</b></u></small>
      </div>
    </div>
  )
}

export default SignUp