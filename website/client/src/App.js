import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MakingTheGame from "./pages/MakingTheGame";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/MakingTheGame" component={MakingTheGame} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
