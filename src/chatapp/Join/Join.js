import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'

function Join() {
 const [username, setName] = useState('')
  const [room, setRoom] = useState('')
  const [id, setId] = useState('')
 return (
  <div className = "joinOuterContainer">
    <div className = "joinInnerContainer">
    <h1 className="heading">Join</h1>
    <div><input placeholder="" className="joinInput" type="text" onChange={event => setName(event.target.value)} />
    </div>
    <div><input placeholder="" className="joinInput mt-20" type="text" onChange={event => setRoom(event.target.value)} />
       </div>
       <div><input placeholder="" className="joinInput mt-20" type="text" onChange={event => setId(event.target.value)} />
    </div>
    <Link onClick = {event => (!username || !room) ? event.preventDefault() : null} to ={`/chat?username=${username}&room=${room}&id=${id}`}>
      <button className = "button mt-20" type = "submit">Sign In</button>    
    </Link>
    </div>
  </div>
 )
}

export default Join
