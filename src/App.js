// import Login from './components/login.js'
import {Routes, Navigate, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import LOGIN from './components/Login.js'
import REGISTER from './components/Register.js'
import FORGOT from './components/Forgot.js'
import DASHBOARD from './components/dashboard.js'
import {useForm} from 'react-hook-form'
import './App.css';


function App(){
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>AlphaX</Link>
                    <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                        </div>
                        </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to='/'>LOGIN</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active"
                                    to='/register'>REGISTER</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active"
                                    to='/forgotpassword'>FORGOT PASSWORD</Link>
                            </li>
                        </ul>
    </nav>
    <Routes>
      <Route path='/' element={<LOGIN/>}/>
      <Route path='/register' element={<REGISTER/>}/>
      <Route path='/forgotpassword' element={<FORGOT/>}/>
      <Route path='/dashboard' element={<DASHBOARD/>}/>
    </Routes>
    </div>
  )
}
export default App;