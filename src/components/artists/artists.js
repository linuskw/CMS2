import React, { useState, useEffect } from "react";
import axios from "axios";

import ArtistList from "./artistList/ArtistList";

import "./artists.css";

const Artists = () => {
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1337/artists`).then((res) => {
      setArtistList(res.data);
    });
  }, []);

  return (
    <div className="artistsWrapper">
      <ArtistList list={artistList} />
    </div>
  );
};

export default Artists;
