import { Avatar } from '@mui/material'
import React from 'react'
import '../styles/Comments.scss'

function Comments({ name, message, photoUrl }) {

  return (
    <div className='comments'>
        <div className="comments__img">
            <Avatar src={photoUrl}/>
        </div>
        <div className="comments__text">
            <h4>{name}</h4>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default Comments