import React from 'react'
import '../styles/Feed.scss'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


function Feed() {
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <FormatQuoteIcon />
                <form>
                    <input type="text" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Feed