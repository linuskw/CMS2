import React, { useState, useEffect } from "react";
import Axios from "axios";

import RecordList from "./RecordList/RecordList";

const Collection = () => {
  const [recordList, setRecordList] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:1337/page-users/1`).then((res) => {
      setRecordList(res.data.records);
    });
  }, []);

  return <RecordList list={recordList} />;
};

export default Collection;
