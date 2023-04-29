import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./ROW.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function ROW({ title, fetchUrl, isLargeROW }) {
  const [movies, setMovies] = useState([]);
  // A snippet of code which runs based on specific conditions
  // read useEffect again
  useEffect(() => {
    // if [] is empty then the use it will runn only once
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
    
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-banner">
        {movies.map((movie) => (
          <img
            key={movie.id}
            // key is used to render the pages only which are required
            className={`row-poster ${isLargeROW && "row-posterLarge"}`}
            // here isLargeROW is used to add another class in the img only if we want any special scenarios
            src={`${base_url}${
              isLargeROW ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
          
        ))}
       
      </div>
    </div>
  );
}

export default ROW;
