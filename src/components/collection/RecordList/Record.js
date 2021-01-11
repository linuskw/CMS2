import React, { useState, useEffect } from "react";

import "./Record.css";

const Record = ({ value, records, deleteRecord, updateRecord }) => {
  const [record, setRecord] = useState({ ...value });
  const [artistName, setArtistName] = useState(
    records?.filter((v) => v.id === record.id)[0]?.artist.Name
  );

  const [editState, setEditState] = useState(false);

  const editRecord = () => {
    if (editState) {
      updateRecord(record);
    }

    setEditState(!editState);
  };

  return (
    <div className="recordWrapper">
      <div className="recordHeader">
        <h2>
          {artistName ? `${record.Name} - ${artistName}` : `${record.Name}`}
        </h2>
        <div>
          <button onClick={editRecord}>{editState ? "Save" : "Edit"}</button>
          <button onClick={() => deleteRecord(record.Name, record.id)}>
            Delete
          </button>
        </div>
      </div>

      <div className="recordWrapperInner">
        <img
          src={`http://localhost:1337${record.Cover.url}`}
          className="recordCover"
        />
        <textarea
          className="userRecordTracklist"
          value={record.Tracklist}
          onChange={(e) => setRecord({ ...record, Tracklist: e.target.value })}
          disabled={!editState}
        />
      </div>
    </div>
  );
};

export default Record;
