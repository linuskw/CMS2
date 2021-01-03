import React from "react";

import Record from "./Record";

const RecordList = ({ list }) => {
  console.log(list);
  return (
    <div>
      {list &&
        list.map((v, i) => {
          return <Record value={v} key={i} />;
        })}
    </div>
  );
};

export default RecordList;
