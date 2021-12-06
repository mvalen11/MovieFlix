import React, { useState } from'react'
import './login.css'
import SignUp from './signup'


function Login() {
    const [signIn, setSignIn] = useState(false);

    return <div className="Login">
        <div className="Login_background">
           <button onClick={() => setSignIn(true)}
            className="login_button">
                Sign In
            </button>
            <div className="loginScreen_gradient" />
        </div>
        <div className="login_Body">
        {signIn ? (
            <SignUp/>
        ) : (
            <>
                <h1>Films, Tv shows and more</h1>
                <h2>Watch anywhere</h2>
                <h3>
                    Ready to start your MovieFlix journey? 
                    Enter your email now to create your account.
                </h3>

                <div className="logIn_input">
                    <form>
                        <input type="email" placeholder="Email 
                        Address" />
                        <button 
                        onClick={() => setSignIn(true)}
                        className='signUp_button'>
                            Sign Up
                        </button>
                    </form>
                </div>
            </>
        )}
        </div>
    </div>
            
}

export default Login;