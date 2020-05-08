import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Databasepage from "./components/databasepage";
import Openclosed from "./components/openclosed";
import GetDoctors from "./components/onduty";
import Patientlist from "./components/patientlist";
import Signup from "./components/signup";
import Welcome from "./components/welcome";

function App() {
  return (
    <Router>
      <div className="topnav">
        <header className="App-header"></header>
        <nav>
          <NavLink
            className="Toolbar"
            activeStyle={{ fontWeight: "bold" }}
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="Toolbar"
            activeStyle={{ fontWeight: "bold" }}
            to="/onduty"
          >
            Doctor Schedule
          </NavLink>
          <NavLink
            className="Toolbar"
            activeStyle={{ fontWeight: "bold" }}
            to="/signup"
          >
            Patient Signup
          </NavLink>
          <NavLink
            className="Toolbar"
            activeStyle={{ fontWeight: "bold" }}
            to="/database"
          >
            Patient Database
          </NavLink>
        </nav>
      </div>
      <Switch>
        <Route path="/onduty">
          <GetDoctors />
          <Openclosed />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/database">
          <Databasepage />
        </Route>
        <Route exact path="/">
          <Openclosed />
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// const onduty = [
//   {name: "Dr. Coventry"}
//   { name: "Dr. Adenet" },
//   { name: "Dr. Tollady" },
// ];
