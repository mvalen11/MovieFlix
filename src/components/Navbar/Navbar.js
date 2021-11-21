import React from 'react';
//import {Link} from 'react-router-dom'
import {Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink} from './NavbarElements';

    function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>MovieFlix</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/movies' activeStyle>
                        Movies
                    </NavLink>
                    <NavLink to='/news' activeStyle>
                        News
                    </NavLink>
                    <NavLink to='/my-list' activeStyle>
                        My List
                    </NavLink>
                    <NavLink to='/Account' activeStyle>
                        Account
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}

export default Navbar
