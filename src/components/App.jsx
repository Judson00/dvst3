import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "../styles/App.css";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import BudgetForm from "./BudgetForm"

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>DVST3</h1>
        <Link to="/dashboard">DashBoard</Link>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/budgetform" component={BudgetForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
