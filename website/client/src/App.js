import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import NoMatch from "./components/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
