import React from "react";

const Record = ({ value }) => {
  console.log(value);
  return (
    <div>
      <img src={`http://localhost:1337${value.Cover.url}`} />
      <p>{value.Name}</p>
    </div>
  );
};

export default Record;
