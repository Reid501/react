import React, { useEffect, useState } from 'react';
import '../styles/Feed.scss';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Post from './Post';
import { db } from './firebase';
import firebase from "firebase/compat/app";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    const user = useSelector(selectUser);

    // Get Collection and store it in posts
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => 
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        )
    }, [])

    // Add post to the collection
    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
    }
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <FormatQuoteIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <h4>Add your favourite movie quote and try to guess other users quotes.</h4>
            </div>

            {/* Posts */}
            <FlipMove>
            {posts.map(({id, data: { name, message, photoUrl} }) => (
                <Post
                    key={id}
                    postId={id + 1}
                    name={name}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            </FlipMove>
        </div>
    )
}

export default Feed