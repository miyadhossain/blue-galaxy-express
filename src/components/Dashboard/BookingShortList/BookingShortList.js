import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";

const BookingShortList = ({ bookings }) => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://radiant-coast-42824.herokuapp.com/bookingsByEmail?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);

  // total orders price
  const total = orders.reduce(
    (total, book) => total + Number(book.bookings.fee),
    0
  );
  return (
    <div className="table_container mt-3">
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th className="text-secondary text-left" scope="col">
              SL No
            </th>
            <th className="text-secondary" scope="col">
              Image
            </th>
            <th className="text-secondary" scope="col">
              Service Name
            </th>
            <th className="text-secondary" scope="col">
              Service Fee
            </th>
            <th className="text-secondary" scope="col">
              Booking Status
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((book, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                <img
                  style={{ width: "50px" }}
                  src={book.bookings.imgURL}
                  alt=""
                />
              </td>
              <td>{book.bookings.serviceName}</td>
              <td>${book.bookings.fee}</td>
              <td>{book.status || "Pending"}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
          <tr>
            <td className="fw-bold">Total</td>
            <td></td>
            <td></td>
            <td className="fw-bold">${total}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookingShortList;
