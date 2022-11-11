import React, { useState, useEffect, useRef } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import TextContainer from '../TextContainer/TextContainer'
import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'

import './Chat.css'

const ENDPOINT = 'http://localhost:3000'
 


const Chat = () => {
 
  const [username, setName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState('')
  const [message, setSingleMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [id, setId] = useState('')
  
   const socket = useRef()
 
  useEffect(() => {
    const { username, room, id } = queryString.parse(window.location.search)
    console.log(username, room, id)

    socket.current = io(ENDPOINT)

    socket.current.on('connect', () => {
      console.log('Client connect with id: ' + socket.current.id)
    })

    setRoom(room)
    setName(username)
    setId(id)

    socket.current.emit('join', { username, room, id })

  }, [ENDPOINT, window.location.search])
  
  //check if room has changed
  console.log(room)
  
  useEffect(() => {
    socket.current.on('message', message => {
      setMessages(prev => [...prev, message])
    });
    
    socket.current.on('roomData', ({ users }) => {
      console.log('users: ' + users)
      setUsers(users)
    })
  }, [messages])
  
  const sendMessage = (e) => {
    e.preventDefault()

    if (message) {
      socket.current.emit('incomingMessage', message)
      setSingleMessage('')
    }
  }

 return (
  <div className = "outerContainer"> 
     <div className="container_chat">
       <InfoBar room={room} />
        <Messages messages={messages} name={username} />
       <Input message={message} setSingleMessage = {setSingleMessage} sendMessage = {sendMessage} />
     </div>
     <TextContainer users = {users} />
  </div>
 )
}

export default Chat;
