import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='Login_form'>
      <div className="Login_item">
        <div className="Login_page">
            <h1>Welcome Page</h1>
            <p>sing in to your account</p>
            <b>www.toursite.com</b>
        </div>
        <div className="Login">
            <p>Hello !</p>
            <b>Good Morning</b>
            <h4><a href="./">Login</a> your account</h4>
            <input type="email" placeholder='Email addres' />
            <input type="password" placeholder='Password' />

            <button>SUBMIT</button>
            <a href="./">Create account</a>


        </div>
      </div>
    </div>
  )
}

export default Login
