import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { login } from '../../Redux/userSlice';
import './Login.css'

const Login = () => {
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [name,setName] = useState("");
   const [nick,setNick] = useState("");
   const dispatch = useDispatch();

   const loginToApp = (e) => {
       e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(login({
                email : userAuth.user.email,
                uid: userAuth.user.uid,
                displayName : userAuth.user.displayName,
                nick:nick
            }))
        })
   }

   const register = () => {
        if(!name || !nick){
            return alert("You need To Fill All details For Sign Up")
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName:name,
                nick:nick
            })
            .then(() => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    nick:nick
                }))
            }).catch(error => alert(error.message))
        })
   }

    return ( <div className="login">
        <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt="logo"/>
        <form>
            <input
            type="text"
            placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)}
            />
            <input type="text" placeholder="Nickname" value={nick} onChange={e => setNick(e.target.value)}/>
            <input type="email" placeholder="Enter Email"  value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={loginToApp} type="submit">Sign In</button>
            <button onClick={register}>Sign Up</button>
        </form>
    </div> );
}
 
export default Login;