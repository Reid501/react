import { Avatar } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import '../styles/Sidebar.scss';
import { auth } from './firebase';

function Sidebar() {

  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  const user = useSelector(selectUser);

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://payload.cargocollective.com/1/11/367710/13568488/MOVIECLASSICSerikweb_2500_800.jpg" alt="classic movies" />
        <Avatar src={user.photoUrl} className='sidebar__avatar'/>
        <h2>{user.displayName}</h2>
        <h4>Favourite Movie</h4>
        <h4>{user.film}</h4>
        <h4 onClick={logoutOfApp}>Logout</h4>
      </div>
    </div>
  )
}

export default Sidebar
