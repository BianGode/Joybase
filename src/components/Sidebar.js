import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { logout,  } from '../FireBase'
import { useNavigate } from 'react-router-dom';

export default function Sidebar(props) {

  let navigate = useNavigate()

  // console.log(auth.currentUser)
  function finalLogout() {
    logout()
    // logout()
    navigate('/')
  }

  if (props.isLoggedIn != null) {
    return (
      <div className='sidebar'>
        <FontAwesomeIcon className='hamburger' icon={faBars} onClick={props.toggleFun} />
        <ul>
          <li className='sidebarLink active' onClick={() => navigate('/')}>Home</li>
          <p className='sidebarP active'>Home</p>
          <li className='sidebarLink' onClick={() => navigate('/Music')}>my Music</li>
          <p className='sidebarP'>my Music</p>
          <li className='sidebarLink' onClick={() => navigate('/About')}>About</li>
          <p className='sidebarP'>About</p>
        </ul>
        <div className='black-box'></div>
        <button onClick={() => finalLogout()}>Sign out!</button>
      </div>
    )
  } else {
    return (
      <div className='sidebar'>
        <FontAwesomeIcon className='hamburger' icon={faBars} onClick={props.toggleFun} />
        <ul>
          <li className='sidebarLink active' onClick={() => navigate('/')}>Home</li>
          <p className='sidebarP active'>Home</p>
          <li className='sidebarLink' onClick={() => navigate('/About')}>About</li>
          <p className='sidebarP'>About</p>
        </ul>
        <div className='black-box'></div>
      </div>
    )
  }
}
