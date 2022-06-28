import React from 'react'
import JumboTron from './components/JumboTron'
import FeaturedArtist from './components/FeaturedArtist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function HomeOrg(props) {

  return (
    <div className='home'>
      <JumboTron />
      <FeaturedArtist />
      <FontAwesomeIcon className='hamburger floatingHamburger' icon={faBars} onClick={props.toggleFun} />
    </div>
  )

}
