import React from 'react'

export default function JumboTronAuth(props) {
  
  return (
    <div className='jumbotron'>
      <div className='overlay'>

      </div>
      <div className='JumboContent'>  
        <h3> Welcome <br/>{props.isLoggedIn.email}</h3>
        <button className='button'>
          Explore
        </button>
      </div>
    </div>
  )
}
