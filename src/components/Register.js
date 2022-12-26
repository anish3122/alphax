// import Login from './components/login.js'
import {Routes, Navigate, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router';
import axios from 'axios'
import './register.css';
import './login.css';


function Register() {
  const {register, handleSubmit, formState: {errors}} = useForm()
  let navigate=useNavigate()
  const onClicked=()=>{
    navigate('/');
    }
    const myStyles = {
        cursor: 'pointer'
    }
//   const onFormSubmit = (userData) => {  
//       console.log(userData)
//   }
  const styles = {
      bold:{
          fontWeight : 'bold'
      }
  }
  const onFormSubmit=(userObj)=>{
        console.log(userObj);
        axios.post('http://localhost:4000/user-api/create-user',userObj)
        .then(response=>{
            console.log(response)
            alert(response.data.message)
            if(response.data.message==="User Created successfully..."){
                navigate("/")
            }
        })
        .catch(error=>{
            console.log(error)
            alert(`error occured ${error}`)
        })
    }   
  return(
      <div className="container">
          <img className = 'img w-50 mr-5' src='https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8&w=1000&q=80'></img>
              <div className="abc card w-50 hover-zoom hover-shadow">
                  <div className="card-body">
                      <h5 className='mb-4'>Welcome!</h5>
                      <h3> Sign up </h3>
                      <p>lorem lpsum is simply</p>
                      <form onSubmit={handleSubmit(onFormSubmit)}>
                        <div className='mb-3'>
                            <label htmlFor='email' className='email mb-1' style={styles.bold}><h5>Email</h5></label>
                            <input type='email' id='email' className='form-control'placeholder={'Enter your email'} {... register('email', {required : true, minLength: 4, maxLength: 30})}></input>
                            {errors.email?.type === 'required' && <p className = 'text-danger mt-2'>*Email is required</p>}
                        </div>
                          <div className = 'mb-3'>
                              <label htmlFor = 'username' className = 'text mb-1' style={styles.bold}><h5>Username</h5></label>
                              <input type = 'text' id = 'username' className = 'form-control' placeholder={'Enter your user name'} autoComplete = 'off' {... register('username', {required : true, minLength: 4, maxLength: 30})}/>
                              {errors.username?.type === 'required' && <p className = 'text-danger mt-2'>*Username is required</p>}
                              {errors.username?.type === 'minLength' && <p className = 'text-danger mt-2'>*Min length should be 4</p>}
                              {errors.username?.type === 'maxLength' && <p className = 'text-danger mt-2'>*Max length should be 30</p>}
                          </div>
                          <div className = 'mb-3'>
                              <label htmlFor = 'password' className = 'text mb-1' style={styles.bold}><h5>Password</h5></label>
                              <input type = 'password' id = 'password' className = 'form-control' placeholder={'Enter your Password'} autoComplete = 'off' {... register('password', {required : true, minLength: 4, maxLength: 30})}/>
                              {errors.password?.type === 'required' && <p className = 'text-danger mt-2'>*Password is required</p>}
                              {errors.password?.type === 'minLength' && <p className = 'text-danger mt-2'>*Min length should be 4</p>}
                              {errors.password?.type === 'maxLength' && <p className = 'text-danger mt-2'>*Max length should be 30</p>}
                          </div>
                          <div className = 'mb-3'>
                              <label htmlFor = 'cpassword' className = 'text mb-1' style={styles.bold}><h5>Confirm Password</h5></label>
                              <input type = 'password' id = 'cpassword' className = 'form-control' placeholder={'Confirm your Password'} autoComplete = 'off' {... register('cpassword', {required : true, minLength: 4, maxLength: 30})}/>
                              {errors.cpassword?.type === 'required' && <p className = 'text-danger mt-2'>*Confirm Password is required</p>}
                              {errors.cpassword?.type === 'minLength' && <p className = 'text-danger mt-2'>*Min length should be 4</p>}
                              {errors.cpassword?.type === 'maxLength' && <p className = 'text-danger mt-2'>*Max length should be 30</p>}
                          </div>
                          <button type = 'submit' className = 'submit w-100 mt-3 mb-5 btn btn-primary'>Register</button>
                      </form>
                  </div>
                  <p className='foot'>Already have an Account ? <b onClick={onClicked} style={myStyles}>Login</b></p>
              </div>
          </div>
  )
}
  export default Register;

//   import img2 from '../Images/signup.svg';
//   import { useForm } from 'react-hook-form';
//   import { BiLogInCircle } from "react-icons/bi";
//   import { useNavigate } from "react-router";
//   import axios from 'axios'
//   import { useState } from 'react';
//   function SignUp() {
//       const { register, handleSubmit, formState: { errors } } = useForm()
//       const navigate = useNavigate()
//       const onClicked=()=>{
//           navigate('/login');
//       }
  
//       const myStyles = {
//           cursor: 'pointer'
//           }
//           const onFormSubmit=(userObj)=>{
//               console.log(userObj);
//               axios.post('http://localhost:4000/user-api/create-user',userObj)
//               .then(response=>{
//                   console.log(response)
//                   alert(response.data.message)
//                   if(response.data.message==="User Created successfully..."){
//                       navigate("/login")
//                   }
//               })
//               .catch(error=>{
//                   console.log(error)
//                   alert(`error occured ${error}`)
//               })
//           }   
//       return (
//           <>
//               <div className='row'>
//                   <div  className='col-6 text-center pt-5'>
//                   <img src={img2} className="w-75" />
//                   </div>
//                   <div className='col-6'>
//                       <form className="mx-auto mt-5 container  p-3 w-75" onSubmit={handleSubmit(onFormSubmit)}>
//                           <h2>Welcome</h2>
//                           <br />
//                           <h2>Sign Up</h2><p>lorem ipsum is simple</p><br />
//                           <div className="mb-2">
//                               <label htmlFor="username" className="form-label">UserName</label>
//                               <input type="text" className='form-control' {...register("username", { required: true })} />
//                               {errors.username?.type === "required" && <p className='text-danger'>*Username is Required</p>}
//                           </div>
//                           <div className="mb-2">
//                               <label htmlFor="email" className="form-label">Email</label>
//                               <input type="text" id="email" className="form-control" {...register("email", { required: true })} />
//                               {errors.email?.type === "required" && <p className='text-danger'>*Email is Required</p>}
//                           </div>
//                           <div className="mb-2">
//                               <label htmlFor="password" className="form-label">Password</label>
//                               <input type="password" className="form-control" {...register("password", { required: true })} />
//                               {errors.password?.type === "required" && <p className='text-danger'>*Password is Required</p>}
//                           </div>
//                           <div className="mb-2">
//                               <label htmlFor="password" className="form-label">Confirm Password</label>
//                               <input type="password" className="form-control" {...register("password2", { required: true })} />
//                               {errors.password?.type === "required" && <p className='text-danger'>*Password is Required</p>}
//                           </div>
//                           <button type="submit" className="btn btn-dark w-100">Register </button><br />
//                           <p className='text-center' style={myStyles}>Already have an Account ?<b onClick={onClicked}>Login</b></p>
//                       </form>
//                   </div>
//               </div>
//           </>
//       )
//   }
//   export default SignUp;
