import React, {useState, useEffect} from 'react';
import Popup from "../components/Popup"
import '../components/Popup/Popup.css'

function News() {
  //creating button PopUp 
  const [timePopUp, setTimePopup] = useState(false);
  
  //it's going to run once using the UsingEffect function
  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true);
    }, 3000)
  }, [])
  
  return (
    <div className = "naranja">
      
      <Popup trigger={timePopUp} setTrigger={setTimePopup}>
      </Popup> 

      <h1 className = "White">News</h1>
    </div>
  );
};

export default News;