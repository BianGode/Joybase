import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../FireBase'

export default function Login(props) {

  let navigate = useNavigate();
  // const auth = getAuth();

  function finalLogin() {
    let email = document.getElementById('emailLog').value
    let pass = document.getElementById('passLog').value
    logInWithEmailAndPassword(email, pass).then(() => {
      console.log(auth.currentUser)
      props.setIsLoggedIn(auth.currentUser)
      console.log(props.IsLoggedIn)
    })
    navigate('/')
    // give value so the homepage can decide to show welcome message or register button
  }

  // onAuthStateChanged(auth, (user) => {
  if (auth.currentUser) {
    return navigate('/')
  } else {
    return (
      <div className='login'>
        <div className='loginBgColor'>
          <h2>Login</h2>

          <div className='flexWrapper'>
            <input placeholder='Email' id='emailLog' />
            <input placeholder='Password' id='passLog' />
            <a onClick={() => { navigate('/register') }}><p>Don’t have an account yet? <br /> Register now!</p></a>
          </div>
          {/* Working on login register firebase  */}
          <button onClick={finalLogin}>Login</button>
        </div>
      </div>
    )
  }

}
