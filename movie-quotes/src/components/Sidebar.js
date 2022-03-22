import { Avatar } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import '../styles/Sidebar.scss';
import { auth } from './firebase';

function Sidebar() {

  // Logout
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
        { user.displayName && <Avatar src={user.photoUrl} className='sidebar__avatar'>{user?.displayName[0].toUpperCase()}</Avatar>}
        { user.displayName && <h2>{user.displayName}</h2>}
        <h4 onClick={logoutOfApp} className="sidebar__logout">Logout</h4>
      </div>
    </div>
  )
}

export default Sidebar
