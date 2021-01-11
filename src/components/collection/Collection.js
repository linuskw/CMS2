import React, { useState, useEffect } from "react";
import axios from "axios";

import RecordList from "./RecordList/RecordList";
import Record from "./RecordList/Record";

import "./collection.css";

const Collection = ({ user }) => {
  const [userState, setUserState] = useState();
  const [userRecords, setUserRecords] = useState();
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:1337/users/${localStorage.getItem("userid")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userJWT")}`,
        },
      })
      .then((res) => {
        setUserState(res.data);
        setUserRecords(res.data.records);
      });

    axios.get(`http://localhost:1337/records`).then((res) => {
      setRecords(res.data);
    });
  }, []);

  useEffect(() => {
    console.log(userRecords);
  }, [userRecords]);

  const axiosPut = (tempRecords) => {
    axios
      .put(
        `http://localhost:1337/users/${localStorage.getItem("userid")}`,
        {
          records: tempRecords,
        },

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userJWT")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setUserRecords(res.data.records);
        // axios
        //   .get(
        //     `http://localhost:1337/users/${localStorage.getItem("userid")}`,
        //     {
        //       headers: {
        //         Authorization: `Bearer ${localStorage.getItem("userJWT")}`,
        //       },
        //     }
        //   )
        //   .then((res) => {
        //     setUserState(res.data);
        //     setUserRecords(res.data.records);
        //   });
      });
  };

  const addRecord = (e) => {
    e.preventDefault();
    const tempRecords = [...userRecords, selectedRecord];
    axiosPut(tempRecords);
  };

  const updateRecord = (updatedRecord) => {
    axios
      .put(
        `http://localhost:1337/records/${updatedRecord.id}`,
        {
          Tracklist: updatedRecord.Tracklist,
        },

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userJWT")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  const deleteRecord = (name, id) => {
    console.log(name);
    console.log(id);
    const tempRecords = userRecords.filter((v) => v.id !== id);
    console.log("tempRecords: ", tempRecords);

    setUserRecords((prev) => prev.filter((v) => v.id !== id));

    axiosPut(tempRecords);
  };

  return (
    <div className="collectionWrapper">
      <form onSubmit={(e) => addRecord(e)}>
        <select
          onChange={(e) => {
            setSelectedRecord(records[e.target.value]);
          }}
        >
          {records?.map((v, i) => {
            return (
              <option value={i} key={i}>
                {v.Name}
              </option>
            );
          })}
        </select>
        <input type="submit" />
      </form>
      {userRecords?.map((v, i) => {
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

export default Collection;
