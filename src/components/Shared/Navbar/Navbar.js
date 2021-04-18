import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Link to="/home" className="navbar-brand heavenNav">
          <span className="text-info fs-4">Blue-Galaxy</span>
          <span className="text-danger">-Express</span>
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active ">
            <Link
              style={{ fontWeight: "600" }}
              className="nav-link mr-5 text-info"
              to="/"
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ fontWeight: "600" }}
              className="nav-link mr-5 text-info"
              to="#"
            >
              SERVICES
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ fontWeight: "600" }}
              className="nav-link mr-5 text-info"
              to="#"
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ fontWeight: "600" }}
              className="nav-link mr-5 text-info"
              to="#"
            >
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ fontWeight: "600" }}
              className="nav-link mr-5 text-info"
              to="/admin"
            >
              ADMIN
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{
                fontWeight: "600",
                backgroundColor: "#8BE0F5",
                borderRadius: "5px",
              }}
              className="nav-link mr-5 text-white"
              to="/login"
            >
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
