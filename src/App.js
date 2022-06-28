import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
// import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home.js'
import Login from "./components/Login";
import Register from "./components/Register";
import MyMusic from "./components/MyMusic";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from "./FireBase";
import { onAuthStateChanged } from "firebase/auth";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const [userState, setUserState] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState('hello');
  const [song, setSong] = useState('')

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(user)
    }
    else {
      setIsLoggedIn(null)
    }
  })

  let y = true;
  function toggleSidebar() {
    if (y == true) {
      document.querySelector('.home').classList.toggle('sidebarActive')
      document.querySelector('.sidebar').classList.toggle('retract')

      setTimeout(() => {
        if (document.querySelector('.sidebar').style.display === "none") {
          document.querySelector('.sidebar').style.display = "block";
        } else {
          document.querySelector('.sidebar').style.display = "none";
        }

      }, 200);
      y = false
    } else {
      if (document.querySelector('.sidebar').style.display === "none") {
        document.querySelector('.sidebar').style.display = "block";
      } else {
        document.querySelector('.sidebar').style.display = "none";
      }
      document.querySelector('.home').classList.toggle('sidebarActive')
      document.querySelector('.sidebar').classList.toggle('retract')
      y = true
    }
  }


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<>
            <Sidebar toggleFun={toggleSidebar} isLoggedIn={isLoggedIn} />
            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} toggleFun={toggleSidebar} />
            <Footer />
          </>} />
          <Route path='/Music' element={<>
            <Sidebar toggleFun={toggleSidebar} isLoggedIn={isLoggedIn} />
            <MyMusic toggleFun={toggleSidebar} setSong={setSong} isLoggedIn={isLoggedIn}/>
            <Footer />
          </>} />
          <Route path="/About"/>
          <Route path='/Login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={userState} setUser={() => setUserState} />} />
          <Route path='/Register' element={<Register setUser={setUserState} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </Router>
      <AudioPlayer song={song} isLoggedIn={isLoggedIn}/>
      {/*<AudioPlayer
        className="audioplayer"
        autoPlay
        src={DUCKWORTH}
        controls
      /> */}
      {/* <Player /> */}
    </div>
  );
}

export default App;