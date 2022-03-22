import { Avatar } from '@mui/material';
import React from 'react';
import '../styles/Comments.scss';

function Comments({ name, message, photoUrl }){

  return (
    <div className='comments'>
        <div className="comments__img">
          { name && <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>}
        </div>
        <div className="comments__text">
            <h4>{name}</h4>
            <p>{message}</p>
        </div>
    </div>
  )
};

export default Comments