import React from "react";

import Artist from "../artist/Artist";

const ArtistList = ({ list }) => {
  return (
    <div>
      {list &&
        list.map((v, i) => {
          return <Artist value={v} key={i} />;
        })}
    </div>
  );
};

export default ArtistList;
