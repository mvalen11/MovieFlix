import React, { useState, useEffect } from 'react';
import axios from '../axios';
import "./Rows/Row.css";

//base url for the images
const baseurl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}){
    //Creating state variables (Temporary variables)
    const [movies, setMovies] = useState([0]);

    //toggle
    const [toggle, setToggle] = useState(false);
    //toggle arrow function
    const toggles=()=>{
        setToggle(!toggle);
    }

    // A snipper of code which runs based on a specific condition/variable
    useEffect(() => {
        // if [], run once when the row loads, and dont run again
        //this code calls the API. it takes the baseURl and appends the url with the API key
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            //console.log(request); -> for testing purpose
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        
    }, [fetchUrl]);
      console.table(movies)//getting movies in array -> testing purpose
      return(
        <div className = 'White' className="row"> 
            <h2> {title} </h2>
            <div className="row__posters">
                {/*several row__poster(s) */} 
                {movies.map(movie => (
                    <img 
                    //small optimization step which loads the movies faster. cuz of movie.id
                    key={movie.id}
                    onClick={toggles}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    //if its the large row use the poster pic else use the thumbnail
                    src={`${baseurl}${movie.poster_path}`} 
                    alt={movie.name}
                     />                    
                ))}
            </div>
            <div 
            //toggle the next row displaying movie information
            className={toggle ? 'row__posterstextvisible' : 'row__posterstext'}>
                <h1> {"Lucifer"}</h1>  
                <h2> {"Release Date: January 25, 2016"}</h2>
                <p> Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape. </p>
            </div> 
        </div>
    )
}

export default Row