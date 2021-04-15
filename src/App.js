import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddService from "./components/Dashboard/AddService/AddService";
import Book from "./components/Dashboard/Book/Book";
import BookingList from "./components/Dashboard/BookingList/BookingList";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Review from "./components/Dashboard/Review/Review";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
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
          <PrivateRoute path="/admin">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/book">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
