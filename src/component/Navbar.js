import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [data, setData] = useState({});
  const [movid, setMovid] = useState(550);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movid}?api_key=bf684f6d9a04ad6ab0893ef8bc054594`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [movid]);

  return (
    <div>
      <button onClick={() => setMovid(550)}>550</button>
      <button onClick={() => setMovid(55)}>55</button>
      <button onClick={() => setMovid(35)}>35</button>

      <h1>{data.original_title}</h1>
      <h3>{data.overview}</h3>
    </div>
  );
}
