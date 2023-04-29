import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../request";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner(fetchUrl) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchTrending);
      setMovies(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movies);

  return (
    <header className="banner">
      <img
        className="Banner_photo"
        src={`${base_url}${movies.backdrop_path}`}
        alt="movie-banner"
      />
      <div className="banner-contents">
        
        <h1 className="title">{movies.title}</h1>
        <div>
          <button className="banner-button">Play</button>
          <button className="banner-button">Save</button>
        </div>
        <h2 className="discription">{movies.overview}</h2>3
      </div>
    </header>
  );
}

export default Banner;
