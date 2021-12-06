import React, { useRef } from 'react';
import { auth } from "../firebase";
import "./signup.css";

function SignUp() {
 //tracks the email and password using referance 
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  //sign up -> after I sign up it'll create the account on firebase
  // and it would output the account as an array in the console
  const register = (e) => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            //console.log(authUser);
        })
        .catch ((error) => {
            alert(error.message);
        });
    };

//Sign in -> will talk to firebase to see if the account exists
//if it does it would verify password. 
// if no work u will receive a message from firebase
// if work u will enter the application
  const signIn = (e) => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword (
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => alert(error.message))
  };
//Passing the email/pass ref variables to whats in the form
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password"/>
        <button type="submit" onClick={signIn}>Sign In</button>

        <h4>New to MovieFlix? 
          <span className="signupScreen_link" onClick={register}> Sign up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
