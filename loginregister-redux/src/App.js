import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./Redux/userSlice";
import { useEffect } from "react";
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
 const dispatch = useDispatch();

 useEffect(() => {
   auth.onAuthStateChanged(
     userAuth => {
       if(userAuth){
         //user logged in
         dispatch(login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            nick:userAuth.nick
         }))
       }else{
         dispatch(logout())
       }
     }
   )
 }, [dispatch])


  return <div className="App">
    {
      !user ?(
        <Login />
      ):(
        <Home/>
      )
    }
  </div>;
}

export default App;
