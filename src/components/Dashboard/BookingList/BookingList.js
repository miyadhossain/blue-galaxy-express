import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import BookingCard from "../BookingCard/BookingCard";
import Sidebar from "../Sidebar/Sidebar";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://radiant-coast-42824.herokuapp.com/bookingsByEmail?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [loggedInUser.email]);
  return (
    <div className="row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Booking List</h5>
        <BookingCard bookings={bookings} />
      </div>
    </div>
  );
};

export default BookingList;
