import React from "react";

const OrderListTable = ({ orders }) => {
  const handleStatus = (e) => {
    console.log(e.target.name);
  };

  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            SL No
          </th>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Email
          </th>
          <th className="text-secondary" scope="col">
            Service
          </th>
          <th className="text-secondary" scope="col">
            Pay With
          </th>
          <th className="text-secondary" scope="col">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.bookings.serviceName}</td>
            <td>Credit Card</td>
            <td>
              <span>
                <button name="Done" onClick={handleStatus}>
                  Done
                </button>
              </span>
              <span>
                <button name="Pending" onClick={handleStatus}>
                  Pending
                </button>
              </span>
              <span>
                <button name="On Going" onClick={handleStatus}>
                  On Going
                </button>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderListTable;
