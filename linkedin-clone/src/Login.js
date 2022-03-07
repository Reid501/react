import React from 'react'
import './Login.css'
import logo from './LinkedIn-Logo.png';

function Login() {
  return (
    <div className='login'>
        <img src={logo} alt="" />
        <form>
            <input placeholder='Full name (required if registering)' type="text" />

            <input placeholder='Profile pic URL (optional)' type="text" />

            <input placeholder='Email' type="email" />

            <input placeholder='Password' type="password" />

            <button>Sign In</button>
        </form>
        <p>Not a member? <span className='login__register'>Register Now</span></p>
    </div>
  )
}

export default Login