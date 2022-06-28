import React, {useState} from 'react'
import {BsArrowLeftShort, BsArrowRightShort, } from 'react-icons/bs'
import {FaPlay, FaPause} from 'react-icons/fa'
import ReactAudioPlayer from 'react-audio-player';

function AudioPlayer(props) {
const [isPlaying, setisPlaying] = useState(false);

  const togglePlayPause = () => {
    setisPlaying(!isPlaying)
  }

  

  return (
    // problems to fix
    // next/previous songs
    


    
    // <div className='audioplayer'>
    //   <audio className='player'></audio>
    //   <button className='fwbw'><BsArrowLeftShort/> 30</button>
    //   <button className='plpa' onClick={togglePlayPause}>
    //     {isPlaying ? <FaPlay/> : <FaPause/>}
    //   </button>
    //   <button className='fwbw'>30 <BsArrowRightShort/></button>
    //   <div>0:00</div>
    //   <div>
    //     <input type="range"/>
    //   </div>
    //   <div>2:49</div>
    // </div>
    <div>
    {props.isLoggedIn && <ReactAudioPlayer className="audioplayer" autoPlay controls/>}
    </div>
  )
}

export default AudioPlayer