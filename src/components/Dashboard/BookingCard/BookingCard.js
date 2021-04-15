import React from "react";
import BookingShortList from "../BookingShortList/BookingShortList";

const BookingCard = ({ bookings }) => {
  return (
    <div>
      {bookings.length ? (
        <BookingShortList bookings={bookings}></BookingShortList>
      ) : (
        <div className="p-5">
          <h4 className="lead text-center">No Bookings Here!</h4>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
