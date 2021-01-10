import React from "react";

import "./artist.css";

const Artist = ({ value, key }) => {
  return (
    <div className="artistDiv">
      <div className="artistDivHeader">
        <h1>{value.Name}</h1>
      </div>
      <div className="artistDivInner">
        <img
          className="artistImage"
          src={`http://localhost:1337${value.Image.url}`}
        />
        <p className="artistBiography">{value.Biography}</p>
        <div className="recordlistartist">
          {value.records.map((v, i) => {
            return (
              <div className="artistRecordDiv">
                <img
                  className="artistRecordImage"
                  src={`http://localhost:1337${v.Cover.url}`}
                />
                <p>{v.Name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Artist;
