import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Feed from './components/Feed';
import { auth } from './components/firebase';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { loginNow, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //User is logged in
        dispatch(loginNow({
          film: userAuth.film,
          photoUrl: userAuth.photoURL,
          uid: userAuth.uid,
          email: userAuth.email,
          displayName: userAuth.displayName,
        }))
      } else {
        //User is not logged in
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      {!user ? <Login /> : (
        <div className="appBody">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
