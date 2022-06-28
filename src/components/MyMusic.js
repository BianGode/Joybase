import React, { createElement, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { getStorage, ref, getDownloadURL, getBlob } from 'firebase/storage'
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from '../FireBase'
import { useNavigate } from 'react-router-dom';
import SongCom from './SongCom'

function MyMusic(props) {

  // What needs to happen
  // Styling songs
  // query for if the databse is to large
  // check if playing songs is possible if logged out
  const [music, setMusic] = useState([]);

  const nav = useNavigate();
  if (props.isLoggedIn != null) {

    useEffect(() => {
      let isCancelled = false;
      async function get() {
        const q = query(collection(db, 'Songs'))
        const docSnap = await getDocs(q);
        if (!isCancelled) {
          docSnap.forEach((doc, ind) => {

            setMusic(oldarr => [...oldarr, doc.data()])

          })
        }
      }
      get()
      return () => {
        isCancelled = true;
      }
    }, [])
  } else {
    useEffect(() => {
      nav('/login')
    })
  }

  return (
    <div className='home'>
    <div id='h3music'></div>
      <div className='wrapperDiv'>
        {music.map(song => {
          return <SongCom setSong={props.setSong} title={song.title} artist={song.artist} audio={song.song} />
        })}
      </div>
      <FontAwesomeIcon className='hamburger floatingHamburger' icon={faBars} onClick={props.toggleFun} />
    </div>
  )
}

export default MyMusic