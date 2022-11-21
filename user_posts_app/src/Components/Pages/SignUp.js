import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { userSignUp } from '../../api/authSlice';

// constant 
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isSuscribe: false
}

const SignUp = () => {
  const state = useSelector(state => state)
  const history = useHistory()
  const dispatch = useDispatch()
  
  useEffect(()=>{
    console.log("state", state);
  }, [state])

  const { handleSubmit, handleChange, handleBlur, 
    values: { firstName,
      lastName,
      email,
      password,
      isSuscribe },
    errors: { firstName: errFirstName,
      lastName: errLastName,
      email: errEmail,
      password: errPassword
     },
    ...formikValues } = useFormik({
    initialValues,
    onSubmit: (values) => {
        console.log(values);
        // dispatch(userLogin(values))
        dispatch(userSignUp(values))
        history.push("/")
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
        <input className='field-input' name="firstName" type="text" onChange={handleChange} onBlur={handleBlur} value={firstName} />
      </div>
      <div className='field'>
        <label className='field-label' htmlFor="lastName">Last Name</label>
        <input className='field-input' name="lastName" type="text" onChange={handleChange} onBlur={handleBlur} value={lastName}/>
      </div>
      <div className='field'>
        <label className='field-label' htmlFor="email">Email</label>
        <input className='field-input' name='email' type="email" onChange={handleChange} onBlur={handleBlur} value={email}/>
      </div>
      <div className='field'>
        <label className='field-label' htmlFor='password'>Password</label>
        <input className='field-input' name='password' type="password" onChange={handleChange} onBlur={handleBlur} value={password}/>
      </div>
      <div className='field accept'>
        <input className='field-input' name='isSuscribe ' type="checkbox" onChange={handleChange} onBlur={handleBlur} value={isSuscribe}/>
        <label className='field-label' htmlFor='isSuscribe  '>Suscribe to news and updates</label>
      </div>
      <div className='field'>
        <small className='terms-condition'>By clicking Sign Up, you are agree to our <u><b>Terms and Conditions</b></u> and <u><b>Privacy Statement.</b></u></small>
      </div>
      <div className='field sign-up'>
        <button className='sign-up-btn w-100' onClick={handleSubmit}>Sign Up</button>
        <small className='terms-condition'>Already have an account? <u><b onClick={() => history.push("/signin")}>Sign In</b></u></small>
      </div>
    </div>
  )
}

export default SignUp