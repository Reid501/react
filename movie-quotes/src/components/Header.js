import React from 'react'
import '../styles/Header.scss'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Header() {
  return (
    <div className='header'>
        <div className="header__top">
            <h2 className="header__logo">Quote The Movie</h2>
            <p>Quote an epic movie below.</p>
            <p>Comment if you know the movie.</p>
        </div>
        <div className="header__bottom">
            <div className="header__quote">
                <FormatQuoteIcon />
                <input type="text" />
            </div>
        </div>
    </div>
  )
}

export default Header