import React from 'react';
import './Popup/Popup.css';

function Popup(props){
  //if popup is true -> it'll show component else nothing " "
  return (props.trigger) ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
          <h1>MovieFlix Recommendation!</h1> 
          <br></br>
          <h2>Spider-Man: No Way Home</h2>
          <h3>Release Date: 12/15/2021</h3>
          <br/>
          <h3>AMC Roosevelt Field 8</h3>
          <h3>Available Times on 12/16 </h3>
          <br/>
          <h3>Standard: 4:00pm, 5:00pm, 6:00pm, 7:30pm, 8:00pm </h3>
          <h3>3D: 3:30pm, 6:30pm, 7:00pm, 10:00pm, 10:30pm </h3>
          <br/><br/>
          <p className="reason">*Because you clicked on movies with titles that contain "Spiderman"*</p>
        </div>
      </div>
  ) : " " ;
}

export default Popup;