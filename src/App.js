import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddService from "./components/Dashboard/AddService/AddService";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/admin">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
