import { getAuth } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { app, registerWithEmailAndPassword } from '../FireBase'

export default function Register(props) {
  let navigate = useNavigate();

  function checkPass() {
    let pass = document.getElementById('pass').value;
    let passTwo = document.getElementById('passCheck').value
    let email = document.getElementById('emailReg').value;
    if (pass === passTwo) {
      try {
        registerWithEmailAndPassword(email, pass).then(() => {
          props.setIsLoggedIn(getAuth(app).currentUser)
        })
        console.log(getAuth(app))
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    }
    else {
      alert('passwords do not match')
    }
  }

  return (
    <div className='Register'>
      <div className='RegisterBgColor'>
        <h2>Register</h2>

        <div className='flexWrapper'>
          <input placeholder='Email' id="emailReg" />
          <input placeholder='Password' id='pass' />
          <input placeholder='Password check' id='passCheck' />
          <a onClick={() => { navigate('/login') }}><p>Already have an account? <br />Login now!</p></a>
        </div>
        <button onClick={() => checkPass()}>Register</button>
      </div>
    </div>
  )
}
