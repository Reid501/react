import React, { useEffect, useState } from 'react'
import '../styles/Feed.scss'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Post from './Post';
import { db } from './firebase';
import firebase from "firebase/compat/app"

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => 
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),

                }
            )))
        )
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Alex',
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
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
            {posts.map(({id, data: { name, description, message, photoUrl} }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed