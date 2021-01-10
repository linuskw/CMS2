import React from "react";

import Record from "./Record";

const RecordList = ({ userRecords, records, deleteRecord, updateRecord }) => {
  return (
    <div>
      {userRecords &&
        userRecords.map((v, i) => {
          return (
            <Record
              value={v}
              records={records}
              deleteRecord={deleteRecord}
              updateRecord={updateRecord}
              key={i}
            />
          );
        })}
    </div>
  );
};

export default RecordList;
