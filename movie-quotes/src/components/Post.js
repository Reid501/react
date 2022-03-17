import { ChatOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import '../styles/Post.scss';

function Post({ name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar />
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <div className="post__button post__button--like">
                <ThumbUpAltOutlined />
                <p>Like</p>
            </div>
            <div className="post__button">
                <ChatOutlined />
                <p>Comment</p>
            </div>
        </div>
    </div>
  )
}

export default Post