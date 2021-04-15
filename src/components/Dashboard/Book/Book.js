import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import PaymentCard from "../PaymentCard/PaymentCard";
import Sidebar from "../Sidebar/Sidebar";
const stripePromise = loadStripe(
  "pk_test_51Ie1RKCRT0do7zJxObe9awaLKFifEJEIBzlnCw0Vl4CDHeo0lJiEA4NGWuvUIGazC209EwvOEBqhuPv9veabhQ9K0067QxiZUC"
);

const Book = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookingData, setBookingData] = useState(null);
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch("http://localhost:9090/book/" + id)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  const handlePayment = (paymentId, data) => {
    setBookingData(data);
    const bookingDetails = {
      ...loggedInUser,
      bookings: book,
      paymentId,
      orderTime: new Date(),
    };
    fetch("http://localhost:9090/addBookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Booking is successfull!");
      });
  };

  return (
    <div className="row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <div className="container">
          <h3 className="mt-2">Book</h3>
          <div className="mt-3 addBookContainer">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="">User Name</label>
                  <input
                    name="serviceName"
                    className="form-control mt-3"
                    type="text"
                    defaultValue={loggedInUser.name}
                    ref={register}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">User Email</label>
                  <input
                    name="description"
                    className="form-control mt-3"
                    type="text"
                    defaultValue={loggedInUser.email}
                    ref={register}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="mt-3" htmlFor="">
                    Service Name
                  </label>
                  <input
                    name="fee"
                    className="form-control mt-3"
                    type="text"
                    defaultValue={book.serviceName}
                    ref={register}
                  />
                </div>
                <div className="col-md-6">
                  <label className="mt-3" htmlFor="">
                    Pay with Credit Card
                  </label>
                </div>
              </div>
            </form>
            <Elements stripe={stripePromise}>
              <PaymentCard
                book={book}
                handlePayment={handlePayment}
              ></PaymentCard>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
