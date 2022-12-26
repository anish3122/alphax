// import Login from './components/login.js'
import {Routes, Navigate, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router';
import './forgotpass.css'


function Forgot() {
  const {register, handleSubmit, formState: {errors}} = useForm()
  let navigate=useNavigate()
  const onClicked2=()=>{
    navigate('/');
}
const myStyles = {
    cursor: 'pointer'
    }
  const onFormSubmit = (userData) => {  
      console.log(userData)
  }
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
                      <h5 className='mb-5'>Welcome!</h5>
                      <h2 className='abcd mt-5'> Forgot Password ? </h2>
                      <p>lorem lpsum is simply</p>
                      <form onSubmit={handleSubmit(onFormSubmit)}>
                          <div className = 'mt-5 mb-3'>
                              <label htmlFor = 'username' className = 'text mb-1' style={styles.bold}><h5>User name</h5></label>
                              <input type = 'text' id = 'username' className = 'form-control' placeholder={'Enter your user name'} autoComplete = 'off' {... register('username', {required : true, minLength: 4, maxLength: 30})}/>
                              {errors.username?.type === 'required' && <p className = 'text-danger mt-2'>*Username is required</p>}
                              {errors.username?.type === 'minLength' && <p className = 'text-danger mt-2'>*Min length should be 4</p>}
                              {errors.username?.type === 'maxLength' && <p className = 'text-danger mt-2'>*Max length should be 30</p>}
                          </div>
                          <button type = 'submit' className = 'submit mb-5 mt-3 w-100 btn btn-primary'>Login</button>
                      </form>
                  </div>
                  <p className='foot'>Already have an Account ? <b onClick={onClicked2} style={myStyles} >Login</b></p>
              </div>
          </div>
  )
}

export default Forgot;