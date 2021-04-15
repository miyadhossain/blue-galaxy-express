import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const PaymentCard = ({ handlePayment, book }) => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      handlePayment(paymentMethod.id);
      setPaymentError(null);
    }
  };
  return (
    <div>
      <form className="form-control" onSubmit={handleSubmit}>
        <CardElement />
        <p className="mt-3">Your Service charged will be ${book.fee}</p>
        <button
          className="mt-5 float-end btn btn-info"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {paymentError && <p className="text-danger">{paymentError}</p>}
      {paymentSuccess && (
        <p className="text-success float-end">Your payment was successful!</p>
      )}
    </div>
  );
};

export default PaymentCard;
