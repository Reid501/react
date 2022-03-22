import React, { useEffect, useState, forwardRef } from 'react';
import { ChatOutlined, FormatQuote } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import '../styles/Post.scss';
import { db } from './firebase';
import firebase from "firebase/compat/app";
import Comments from './Comments';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

const Post = forwardRef(({ name, message, postId, photoUrl}, ref) => {
    const [input, setInput] = useState('');
    const [comments, setComments] = useState([]);
    const [visiable, setVisiable] = useState('hide');
    const user = useSelector(selectUser);

    // Get Collection and store it in comments
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
    }, [])

    // Add post to the collection
    const sendComment = e => {
        e.preventDefault();

        db.collection(postId + 'comments').add({
            name: user.displayName,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }

    // Show comments
    const showComments = () => {
        if (visiable === '') {
            setVisiable('hide');
        } else {
            setVisiable('');
        }
    }

    

  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            { user.displayName && <Avatar src={photoUrl}>{user?.displayName[0].toUpperCase()}</Avatar>}
            <div className="post__info">
                <h2>{name}</h2>
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
                 { user.displayName && <Avatar src={user.photoUrl}>{user?.displayName[0].toUpperCase()}</Avatar>}
                <div className="post__input">
                    <FormatQuote />
                
                    <form>
                        
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendComment} type="submit">Send</button>
                    </form>
                </div>
        </div>

        {/* Comments */}
        <FlipMove>
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
        </FlipMove>
    </div>
  )
})

export default Post
