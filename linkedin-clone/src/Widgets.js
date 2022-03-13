import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';
import './Widgets.css';

function Widgets () {

    const newsArticle = (heading, subTitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{ heading }</h4>
                <p>{ subTitle }</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle("React is pretty cool!", 'Top news - 9999 readers')}
            {newsArticle("Newcastle win the premier league!", 'Top news - 9359 readers')}
            {newsArticle("Queen voted the best band of all time", 'Top news - 8773 readers')}
            {newsArticle("Xbox X back in stock across UK", 'Top news - 7229 readers')}
        </div>
    )
}

export default Widgets
