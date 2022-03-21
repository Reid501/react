import React, { useEffect, useState } from 'react'
import { ChatOutlined, FormatQuote } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import '../styles/Post.scss';
import { db } from './firebase';
import firebase from "firebase/compat/app"
import Comments from './Comments';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Post({ name, description, message, photoUrl, postId}) {
    const [input, setInput] = useState('');
    const [comments, setComments] = useState([]);
    const [visiable, setVisiable] = useState('hide');


    useEffect(() => {
        db.collection(postId + 'comments').orderBy('timestamp', 'desc').onSnapshot(snapshot => 
            setComments(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                    size: doc.size

                }
            )))
        )
    }, [postId])


    const sendComment = e => {
        e.preventDefault();

        db.collection(postId + 'comments').add({
            name: 'Alex',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }

    const showComments = () => {
        if (visiable === '') {
            setVisiable('hide');
        } else {
            setVisiable('');
        }
    }

    const user = useSelector(selectUser);

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
            <div className="post__button">
                <div onClick={showComments} className="post__commentBtn">
                    <ChatOutlined />
                    <p>Comment</p>
                </div>
                <div className="post__commentCount">
                    <p>{comments.length} comments</p>
                </div>
            </div>
        </div>


        <div className={'post__inputContainer ' + visiable}>
                 <Avatar src={user.photoUrl}/>
                <div className="post__input">
                    <FormatQuote />
                
                    <form>
                        
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendComment} type="submit">Send</button>
                    </form>
                </div>
        </div>

        {/* Comments */}
         
        {comments.map(({id, data: { name, message, photoUrl} }) => (
            <div className={"comments__section " + visiable}>
              
                <Comments
                    key={id}
                    name={name}
                    message={message}
                    photoUrl={photoUrl}
                />
            </div>

        
            ))}
    </div>
  )
}

export default Post
