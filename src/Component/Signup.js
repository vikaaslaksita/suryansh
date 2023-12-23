import React from 'react';
import './Signup.css';
import Image from './bgsignup.jpg';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
        <div className="bg-img-2"></div>
        <div className='back-btn'>
    <button className='back--btn'><Link to={"/Login"}>Back</Link></button>
    </div>
        <form className="form">
    <p className="title">Sign Up </p>
    <p className="message">Signup now and get full access to our website. </p>
        <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" className="input"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" className="input"/>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" className="input"/>
        <span>Confirm password</span>
    </label>
    <button className="submit">Submit</button>
    <p className="signin">Already have an account ? <a href="#">Signin</a> </p>
</form>
</>
  )
}

export default Signup
