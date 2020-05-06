import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Databasepage from "./components/databasepage";
import Navbar from "./components/navbar";
import Onduty from "./components/onduty";
import Patientlist from "./components/patientlist";
import Signup from "./components/signup";
import Welcome from "./components/welcome";

function App() {
  return (
    <Router>
      <div className="topnav">
        <header className="App-header"></header>
        <nav>
          <NavLink activeStyle={{ fontWeight: "bold" }} to="/" exact>
            Home
          </NavLink>
          <NavLink activeStyle={{ fontWeight: "bold" }} to="/onduty">
            Doctor Schedule
          </NavLink>
          <NavLink activeStyle={{ fontWeight: "bold" }} to="/signup">
            Patient Signup
          </NavLink>
          <NavLink activeStyle={{ fontWeight: "bold" }} to="/database">
            Patient Database
          </NavLink>
        </nav>
      </div>
      <Switch>
        <Route path="/onduty">
          <Onduty />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/database">
          <Databasepage />
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
