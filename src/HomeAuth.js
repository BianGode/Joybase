import React from 'react'
import FeaturedArtist from './components/FeaturedArtist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import JumboTronAuth from './components/JumboTronAuth'

export default function HomeAuth(props) {
  return (
    <div className='home'>
      <JumboTronAuth isLoggedIn={props.isLoggedIn} />
      <FeaturedArtist />
      <FontAwesomeIcon className='hamburger floatingHamburger' icon={faBars} onClick={props.toggleFun} />
    </div>
  )
}

