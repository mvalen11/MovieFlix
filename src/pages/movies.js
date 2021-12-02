import React, {useState, useEffect} from 'react';
import Row from '../components/Row'; 
import requests from '../requests';
import Popup from '../components/Popup';

  const Movies = () => {

  //creating button PopUp 
  const [timePopUp, setTimePopup] = useState(false);
  
  //it's going to run once using the UsingEffect function
  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true);
    }, 10000)
  }, [])

  return (
    <div>
      <Popup trigger={timePopUp} setTrigger={setTimePopup}></Popup>   
      <Row title="MOVIEFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} /> 
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
};

export default Movies;