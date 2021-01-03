import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import Main from "../components/main/main";
import Artists from "../components/artists/artists";
import Collection from "../components/collection/Collection";

import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/artists">
        <Artists />
      </Route>
      <Route path="/collection">
        <Collection />
      </Route>
    </Router>
  );
}

export default App;
