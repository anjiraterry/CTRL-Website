import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {  useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios';
import "./Signup.scss"

const Signup = ({ isSignupOpen, setIsSignupOpen }) => {
  const [isLogin, setIsLogin] = useState(false) 
  const navigate = useNavigate()


  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  })

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      if (isLogin) {
      
        const response = await axios.post('http://localhost:8000/api/auth/login', {
          email: values.email,
          password: values.password,
        });
        console.log('Login successful', response.data);
        
      } else {
  
        const response = await axios.post('http://localhost:8000/api/auth/signup', {
          username: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
        });
        console.log('Signup successful', response.data);
        setIsSignupOpen(false)
        navigate('/onboarding');
        
      }
    } catch (error) {
      console.error('Error during form submission', error.response?.data || error.message);
   
    }
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="modal-container">
      <div className='modal-bg' onClick={()=> setIsSignupOpen(false)}></div>
      <div className="modal">
        <div className='close-cont'>
      <div className="close-modal" onClick={()=> setIsSignupOpen(false)}>
          &times;
        </div>
        </div>
        <h1>{isLogin ? 'Login' : 'Signup'}</h1>
        <Formik
          initialValues={{ name: '', email: '', phone: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field name="name" type="text" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <Field name="phone" type="text" />
                <ErrorMessage name="phone" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field name="confirmPassword" type="password" />
                  <ErrorMessage name="confirmPassword" component="div" className="error" />
                </div>
              )}
              <button className='submit' type="submit" disabled={isSubmitting}>
                {isLogin ? 'Login' : 'Signup'}
              </button>
            </Form>
          )}
        </Formik>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : 'Already have an account? '}
          <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
            {isLogin ? ' Signup here' : ' Login here'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Signup
