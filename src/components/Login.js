// import Login from './components/login.js'
import {Routes, Navigate, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import {userLogin} from '../slices/UserSlice.js'
// import Loader from './loader/Loader';
import './login.css';
import './register.css'


function Login() {
    let {userObj,isPending,isFulfilled,isRejected,errMsg}=useSelector((state)=>state.userData)
    // const {register,handleSubmit,formState:{errors}}=useForm();
    let dispatch=useDispatch()
    let navigate=useNavigate()
    const onClicked=()=>{
        navigate('/register');
    }
    const onClicked2=()=>{
        navigate('/forgotpassword');
    }
    const myStyles = {
        cursor: 'pointer'
        }
    const onFormSubmit=(loginData)=>{
        dispatch(userLogin(loginData))
    }
    useEffect(() => {
        if (isFulfilled) {
          navigate("/dashboard");
        }
      }, [isFulfilled, isRejected]);
  const {register, handleSubmit, formState: {errors}} = useForm()
//   const onFormSubmit = (userData) => {  
//       console.log(userData)
//   }
  const styles = {
      bold:{
          fontWeight : 'bold'
      }
  }
  return(
      <div className="container">
        <img className = 'img w-50 mr-5' src='https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8&w=1000&q=80'></img>
              <div className="abc card w-50 hover-zoom hover-shadow">
                  <div className="card-body">
                      <h5 className='mb-4'>Welcome!</h5>
                      <h3> Sign in </h3>
                      <p>lorem lpsum is simply</p>
                      <form onSubmit={handleSubmit(onFormSubmit)}>
                          <div className = 'mb-3'>
                              <label htmlFor = 'username' className = 'text mb-1' style={styles.bold}><h5>Username</h5></label>
                              <input type = 'text' id = 'username' className = 'form-control' placeholder={'Enter your user name'} autoComplete = 'off'{... register('username', {required : true, minLength: 4, maxLength: 30})} />
                              {errors.username?.type === 'required' && <p className = 'text-danger mt-2'>*Username is required</p>}
                              {errors.username?.type === 'minLength' && <p className = 'text-danger mt-2'>*Min length should be 4</p>}
                              {errors.username?.type === 'maxLength' && <p className = 'text-danger mt-2'>*Max length should be 30</p>}
                          </div>
                          <div className = 'mb-3'>
                              <label htmlFor = 'password' className = 'text mb-1' style={styles.bold}><h5>Password</h5></label>
                              <input type = 'password' id = 'password' className = 'form-control' placeholder={'Enter your Password'} autoComplete = 'off'{... register('password', {required : true, minLength: 4, maxLength: 30})} />
                          </div>
                          <div className = 'form-check'>
                              <input type = 'checkbox' id = 'html' className = 'form-check-input'/>
                              <label htmlFor = 'html' className = 'form-check-label'>Remember me</label>
                          </div>
                          <div className='right'>
                            <p onClick={onClicked2} style={myStyles} >Forgot Password?</p>
                          </div>
                          <button type = 'submit' className = 'submit mb-5 w-100 mt-4 btn btn-primary'>Login</button>
                      </form>
                  </div>
                  <p className='foot'>Don't have an Account ? <b onClick={onClicked} style={myStyles}>Register</b></p>
              </div>
          </div>
  )
}
export default Login;

// import img1 from '../Images/signin.svg';
// import { useEffect } from 'react';
// import {useForm} from 'react-hook-form';
// import {useSelector,useDispatch} from 'react-redux';
// import { useNavigate } from 'react-router';
// import {userLogin} from '../slices/Userslice';
// import Loader from './loader/Loader';
// function Login(){
//     let {userObj,isPending,isFulfilled,isRejected,errMsg}=useSelector((state)=>state.userData)
//     const {register,handleSubmit,formState:{errors}}=useForm();
//     let dispatch=useDispatch()
//     let navigate=useNavigate()
//     const onClicked=()=>{
//         navigate('/signup');
//     }
//     const onClicked2=()=>{
//         navigate('/Forgotpass');
//     }
//     const myStyles = {
//         cursor: 'pointer'
//         }
//     const onFormSubmit=(loginData)=>{
//         dispatch(userLogin(loginData))
//     }
//     useEffect(() => {
//         if (isFulfilled) {
//           navigate("/userdashboard");
//         }
//       }, [isFulfilled, isRejected]);
//     return(
//         <>
//         {isPending===true && <Loader/>}
//         <div className='m-5 row'>
//         <img width="150px" src={img1} className='col-sm-6 col-lg-5' />
//             <div className='col-sm-5 col-lg-4 mx-auto m-5'>
//             <h5>Welcome !</h5><br></br>
//                 <h1>Sign in</h1>
//                 <hr />
//                 <form onSubmit={handleSubmit(onFormSubmit)}>

//                     <div className='mb-3'>
//                         <label htmlFor="username" className='form-label'>Username</label>
//                         <input type="text" className='form-control' {...register("username",{required:true})} />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="password" className='form-label'>Password</label>
//                         <input type="password" className='form-control' {...register("password",{required:true})} />
//                     </div><div>
//                     <label>
//                       <input type="checkbox" />Remembered Me</label>
//                       <label className='float-end' onClick={onClicked2} style={myStyles}>Forgot Password?</label>
//                   </div><br></br>
//                     <div className='mb-3'>
//                         <button type="submit" className='btn btn-dark  w-100'>Login</button>
//                     </div>
//                     <p className='text-center'>Don't have an Account ?<b onClick={onClicked} style={myStyles}>Register</b></p>
//                 </form>
//             </div>
//         </div>
//         </>
//     )
// }
// export default Login;
