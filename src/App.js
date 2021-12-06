import React, {useEffect} from 'react';
import Navbar from './components/Navbar/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Movies from './pages/movies';
import News from './pages/news';
import Profile from './pages/profile';
import Account from './pages/account';
import Home from './pages/home';
import Footer from './components/Footer';
import Login from './pages/login';
import {auth} from './firebase';
import { login, logout, selectUser } from './userRedux/userSlice.js';
import { useDispatch, useSelector } from "react-redux";
import Nav from './components/nav';


function App() {
  
  //creating if user is logged in variable using REDUX! 
  const user = useSelector(selectUser); 
  const dispatch = useDispatch();

  //if it userauth exists (they are logged in)
  //if it doesn't exist (they are most likely not logged in)
  //looks like it only works on chrome lol. Google funny for that
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in 
        //console.log("hi" , userAuth) // testing purposes
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      );
    } else {
      // logged out
      dispatch(logout());
    }
    })
    return unsubscribe;
  }, [dispatch]);

  return ( 
<div className="thewholething"> 
    <Router>
      {!user ? (
        <Login/>
      ) : (
      <div>
          <Nav/>
          <Routes>
          <Route path="/"  exact element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/news" element={<News/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/sign-up' element={<Login/>} />
          </Routes>  
        </div>
      )} 
    </Router>

    <Footer/>
</div>
  );
}

export default App;