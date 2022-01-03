import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import Bubble from './bubble.jpg'

function Sidebar() {

    const recentItem = (topic) => {
       
        return <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    };
    
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src={Bubble} alt="" />
                <Avatar className='sidebar__avatar'/>
                <h2>Alex Reid</h2>
                <h4>alexreidwebdev@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you:</p>
                    <p className="sidebar__statnumber">3,000</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statnumber">2,500</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('HTML')}
                {recentItem('CSS')}
            </div>
        </div>
    )
}

export default Sidebar