import React from 'react';
//import {Link} from 'react-router-dom'
import './Navbar.css'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements';

    function Navbar() {

    return (
        <>
            <Nav className="nav">
                <NavLink to='/'>
                    <h1>MovieFlix</h1>
                </NavLink>
                <Bars />
                <NavMenu className="navbar">
                    <NavLink to='/movies'>
                        Movies
                    </NavLink>
                    <NavLink to='/news' activeStyle>
                        News
                    </NavLink>
                    <NavLink to='/profile' activeStyle>
                        Whatever
                    </NavLink>
                    <NavLink to='/Account' activeStyle>
                        Account
                    </NavLink>
                    {/* Second Nav */}
                    <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar
