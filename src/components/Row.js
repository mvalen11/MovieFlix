import React, { useState, useEffect } from 'react';
import axios from '../axios';
import "./Rows/Row.css";
//base url for the images
const baseurl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}){
    //Creating state variables (Temporary variables)
    const [movies, setMovies] = useState([]);

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
      //console.table(movies); //getting movies in array -> testing purpose
    
      return(
        <div className = 'White' className="row"> 
            <h2> {title} </h2>
            <div className="row__posters">
                {/*several row__poster(s) */}
                {movies.map(movie => (
                    <img 
                    //small optimization step which loads the movies faster. cuz of movie.id
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    //if its the large row use the poster pic else use the thumbnail
                    src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                ))}
            </div>

           
        </div>
    )
}

export default Row