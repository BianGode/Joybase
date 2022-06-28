import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function JumboTron() {

  let navigate = useNavigate()

  function navLog() {
    navigate('/login')
  }
  function navReg() {
    navigate('/register')
  }
  return (
    <div className='jumbotron'>
      <div className='overlay'>

      </div>
      {/* if User logged in: show welcome message
        Else show Register button and stock homepage
       */}
      <div className='JumboContent'>
        <h3> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil minima </h3>
        <div className='buttonAlignHome'>
          <a href='#' onClick={navReg}><button className='button'>
            Register
          </button></a>
          <a href='#' onClick={() => navLog()}><button className='Login button'>
            Login
          </button></a>
        </div>
      </div>
    </div>
  )
}
