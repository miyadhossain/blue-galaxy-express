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
    fetch("https://radiant-coast-42824.herokuapp.com/book/" + id)
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
    fetch("https://radiant-coast-42824.herokuapp.com/addBookings", {
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
        style={{ position: "absolute", right: 0, backgroundColor: "#DBE0FE" }}
      >
        <div className="container">
          <h3 className="mt-2">Book</h3>
          <div className="mt-3 addBookContainer">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="">User Name</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={loggedInUser.name}
                    ref={register}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">User Email</label>
                  <input
                    className="form-control"
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
                    className="form-control"
                    type="text"
                    defaultValue={book.serviceName}
                    ref={register}
                  />
                </div>
                <div className="col-md-6"></div>
              </div>
            </form>
            <h6 className="mt-5 text-primary">
              Pay with <br /> <i className="bi bi-credit-card-2-front"></i>{" "}
              Credit Card
            </h6>
            <Elements stripe={stripePromise}>
              <PaymentCard
                book={book}
                handlePayment={handlePayment}
              ></PaymentCard>
            </Elements>
            <p className="mt-3 fw-bold">
              Your service charged will be ${book.fee}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
