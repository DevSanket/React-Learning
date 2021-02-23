import React from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { logout } from '../../Redux/userSlice';
const Home = () => {
    const dispatch = useDispatch();

    const logOutofApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    return ( <div className="home">
        <h1>You Are Logged In</h1>
        <button onClick={logOutofApp}>Log Out</button>
    </div> );
}
 
export default Home;