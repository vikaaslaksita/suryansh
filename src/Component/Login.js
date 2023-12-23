import React from 'react';
import Image from './bglogin.jpg';
import { Link } from'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <div>
      <div className='main-login-page'>
          <div className='back-btn'>
              <button className='back--btn'><Link to={"/"}>Back</Link></button>
          </div>
          <div className='bg-img'></div>
          <div className='login-form'>
            <h1>Log In</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='email'>Email : </label>
                    <input type='email' className='form-control' id='email' placeholder='Enter email' /> 
                </div>
                 <div className='form-group'>
                        <label htmlFor='password'>Password : </label>
                        <input type='password' className='form-control' id='password' placeholder='Enter password' />
                </div>
                <div className='form-group'>
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <label htmlFor="text">Remember Me</label>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  <a href="/" className='link'>Forgot Password</a>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn-login btn-primary'>Login</button>
                </div>
                <div className='form-group'>
                    <p>Don't have an account?&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <Link to={"/Signup"} className='link'>SignUp</Link></p>
                </div>
            </form>
          </div>
      </div>
    </div>
  )
}
