import React from "react";

const OrderListTable = ({ orders }) => {
  // submit form
  const handleSubmit = (id, statusValue) => {
    const statusData = {
      id: id,
      status: statusValue,
    };
    fetch(`http://localhost:9090/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(statusData),
    }).then((result) => {
      alert("Updated successfully!");
    });
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
              <form onBlur={(e) => handleSubmit(order._id, e.target.value)}>
                <span>{order.status || "Pending"}</span>
                <select>
                  <option value="Done">Done</option>
                  <option value="On Going">On Going</option>
                  <option value="Pending">Pending</option>
                </select>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderListTable;
