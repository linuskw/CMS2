import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "../components/login/Login";
import Main from "../components/main/main";
import Artists from "../components/artists/artists";
import Collection from "../components/collection/Collection";

import "./App.css";

function App() {
  const [pageState, setPageState] = useState(
    localStorage.getItem("userJWT") ? true : false
  );

  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(user);
  }, [user]);

  const onLogout = () => {
    setPageState(false);
    localStorage.removeItem("userJWT");
    localStorage.removeItem("username");
    localStorage.removeItem("userid");
  };

  return (
    <>
      {pageState && localStorage.getItem("userJWT") ? (
        <>
          <Router>
            <Link to="/artists">Artists</Link>
            <Link to="/">Collection</Link>
            <Route exact path="/">
              <Collection user={user} />
            </Route>
            <Route path="/artists">
              <Artists />
            </Route>
          </Router>
          <button className="logoutButton" onClick={onLogout}>
            Log Out
          </button>
        </>
      ) : (
        <Login setPageState={setPageState} setUser={setUser} />
      )}
    </>
  );
}

export default App;
