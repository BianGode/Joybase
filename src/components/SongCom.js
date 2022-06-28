import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faMusic} from '@fortawesome/free-solid-svg-icons'


export default function SongCom(props) {

  function setCurSong(audio) {
    document.querySelector('.audioplayer').src = audio
  }
  return (
    <div className='wrapperEachCard'>
      <div className='songTitleWrapper'>
        <h3 title='title'>{props.title}</h3>
        <h3 title='artist'>{props.artist}</h3>
      </div>
      <div className='songAction'>
        <FontAwesomeIcon className='queue' icon={faPlay}/>
        <div onClick={setCurSong(props.audio)}>
          <FontAwesomeIcon className='play' icon={faMusic}/>
        </div>
      </div>
    </div>
  )
}
