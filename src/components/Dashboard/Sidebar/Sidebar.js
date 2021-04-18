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
          <Link to="/" className="text-white">
            <span>
              <i class="bi bi-house"></i> Home
            </span>
          </Link>
        </li>
        {isAdmin ? (
          <div>
            <li>
              <Link to="/orderList" className="text-white">
                <span>
                  <i class="bi bi-view-stacked"></i> Order List
                </span>
              </Link>
            </li>
            <li>
              <Link to="/addService" className="text-white">
                <span>
                  <i class="bi bi-plus-circle"></i> Add Service
                </span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-white">
                <span>
                  <i class="bi bi-people"></i> Make Admin
                </span>
              </Link>
            </li>
            <li>
              <Link to="/manageServices" className="text-white">
                <span>
                  <i class="bi bi-sliders"></i> Manage Services
                </span>
              </Link>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to="/book" className="text-white">
                <span>
                  <i class="bi bi-bag-check"></i> Book
                </span>
              </Link>
            </li>
            <li>
              <Link to="/bookingList" className="text-white">
                <span>
                  <i class="bi bi-view-list"></i> Booking List
                </span>
              </Link>
            </li>
            <li>
              <Link to="/review" className="text-white">
                <span>
                  <i class="bi bi-chat-right-quote"></i> Review
                </span>
              </Link>
            </li>
          </div>
        )}
      </ul>

      <Link onClick={handleLogOut} to="/" className="text-white">
        <span>
          <i class="bi bi-box-arrow-left"></i> Logout
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;
