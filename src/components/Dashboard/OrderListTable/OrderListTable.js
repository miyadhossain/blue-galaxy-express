import React, { useState } from "react";
import { useForm } from "react-hook-form";

const OrderListTable = ({ orders }) => {
  const { register, handleSubmit } = useForm();
  const [status, setStatus] = useState(null);
  console.log(status);

  // submit form
  const onSubmit = (data, id) => {
    const statusData = {
      status: status,
    };
    console.log(statusData);
    const url = `http://localhost:9090/update/${id}`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(statusData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const handleStatus = (id) => {
    console.log(id);
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
              <form onSubmit={handleSubmit(onSubmit, order._id)}>
                <input
                  onClick={() => handleStatus(order._id)}
                  type="submit"
                  name="pending"
                  value="pending"
                  ref={register}
                />
                <input
                  type="button"
                  name="ongoing"
                  value="ongoing"
                  ref={register}
                />
                <input type="button" name="done" value="done" ref={register} />
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderListTable;
