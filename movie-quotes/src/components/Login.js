import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Login.scss';
import { auth } from './firebase';
import { loginNow } from '../features/userSlice';

function Login() {
    const [login, setLogin] = useState(false);
    const [loginClass, setLoginClass] = useState('');
    const [registerClass, setRegisterClass] = useState('show');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    // Switch between login and register
    const showLogin = () => {
        setLogin(true);
        setLoginClass('show');
        setRegisterClass('')
    }

    const showRegister = () => {
        setLogin(false);
        setLoginClass('');
        setRegisterClass('show')
    }

    // Refister new user
    const register = (e) => {
        e.preventDefault();
        if(!name) {
            return alert('Please provide a name.');
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
              displayName: name,
              photoURL: profilePic,
            })
            .then(() => {
              dispatch(loginNow({
                uid: userAuth.user.uid,
                email: userAuth.user.email,
                displayName: name,
                photoUrl: profilePic,
              }))
            }).catch(error => alert(error));
        })
    }

    // Login to app
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(loginNow({
                uid: userAuth.user.uid,
                email: userAuth.user.email,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error));
    }

    return (
        <div className='login'>
            <div className="login__container">
                <div className="login__headers">
                    <h4 onClick={showRegister} className={registerClass}>Register</h4>
                    <h4 onClick={showLogin} className={loginClass}>Login</h4>
                </div>
                {!login ? (
                <form>
                   
                    <label>Full Name:</label>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder={'Full name *required'} type="text" />
                    <label>Profile Pic:</label>
                    <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder={'Profile pic Url (optional)'} type="text" />
                    <label>Email:</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder={'Email *required'} type="email" />
                    <label>Password:</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} placeholder={'Password *required'} type="password" />
                    <button type='submit' onClick={register}>Register</button>
                </form>
                ) : (

                <form>
                    <label>Email:</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder={'Email'} type="email" />
                    <label>Password:</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} placeholder={'Password'} type="password" />
                    <button type='submit' onClick={loginToApp}>Sign In</button>
                </form>
                )}
            </div>
            
        </div>
  )
}

export default Login