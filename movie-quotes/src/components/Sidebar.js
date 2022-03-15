import { Avatar } from '@mui/material';
import React from 'react'
import '../styles/Sidebar.scss';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://payload.cargocollective.com/1/11/367710/13568488/MOVIECLASSICSerikweb_2500_800.jpg" alt="classic movies" />
        <Avatar className='sidebar__avatar'/>
        <h2>Alex Reid</h2>
        <h4>Favourite Movie</h4>
        <h4>Rocky</h4>
      </div>
    </div>
  )
}

export default Sidebar
