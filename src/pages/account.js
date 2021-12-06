import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';
import { selectUser } from '../userRedux/userSlice';
import './account.css';


function Account() {
  //Selecting user from the store
  const user = useSelector(selectUser);
  return (
    <div className="account">
      <div className="account_body">
        <h1>Account</h1> 
        <div className="account_info">
          <img
          src="https://www.youloveit.com/uploads/posts/2020-11/1605537245_youloveit_com_disney_princess_wears_masks_profile_pictures08.jpeg"
          alt=""
          />
          <div className="account_details">
            <h2>Email: {user.email}</h2>
            <div className="account_stuff"> 
              <h3>  </h3>
            </div> 
            <div className="account_plans"> 
              <button onClick={() => auth.signOut()} className="account_signout"> Sign Out </button>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;



