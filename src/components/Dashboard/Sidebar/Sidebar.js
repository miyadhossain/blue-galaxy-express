import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard" className="text-white">
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <span>Home</span>
          </Link>
        </li>
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
      </ul>
      <div>
        <Link to="/" className="text-white">
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
