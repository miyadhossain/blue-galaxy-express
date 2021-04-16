import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://radiant-coast-42824.herokuapp.com/verifyAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  //hanlde logout
  const handleLogOut = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/admin" className="text-white">
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <span>Home</span>
          </Link>
        </li>
        {isAdmin && (
          <div>
            <li>
              <Link to="/orderList" className="text-white">
                <span>Order List</span>
              </Link>
            </li>
            <li>
              <Link to="/addService" className="text-white">
                <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-white">
                <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/manageServices" className="text-white">
                <span>Manage Services</span>
              </Link>
            </li>
          </div>
        )}
        <li>
          <Link to="/book" className="text-white">
            <span>Book</span>
          </Link>
        </li>
        <li>
          <Link to="/bookingList" className="text-white">
            <span>Booking List</span>
          </Link>
        </li>
        <li>
          <Link to="/review" className="text-white">
            <span>Review</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link onClick={handleLogOut} to="/" className="text-white">
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
