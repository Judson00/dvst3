import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/App.css";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import SignUp from "./SignUp";
import Nav from "./Nav";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>DVST3</h1>
        <Switch>
          <PrivateRoute path="/nav" component={Nav} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
