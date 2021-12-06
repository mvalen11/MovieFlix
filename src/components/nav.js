import React from 'react';
import './nav.css';
import { auth } from '../firebase';
import { selectUser } from '../userRedux/userSlice';
import { useSelector } from 'react-redux';


function Nav() {
const user = useSelector(selectUser);
return (
<div class="navbar">
    <nav class="navbar">
        <h1 > <a className="brand-logo" href="/">MovieFlix</a></h1> 
        <ul class="nav-links">
            <li class="nav-items"><a href="/">Home</a></li>
            <li class="nav-items"><a href="/movies">Movies</a></li>
            <li class="nav-items"><a href="/account">Account</a></li>
        </ul>
        <div class="right-container">
            <button onClick={() => auth.signOut()} class="sub-btn">sign out</button>
        </div>
    </nav>
</div>
);
}

export default Nav;