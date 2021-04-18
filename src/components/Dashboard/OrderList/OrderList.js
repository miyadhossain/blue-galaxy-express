import React, { useEffect, useState } from "react";
import OrderListTable from "../OrderListTable/OrderListTable";
import Sidebar from "../Sidebar/Sidebar";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://radiant-coast-42824.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#DBE0FE" }}
      >
        <h4 className="text-brand">Order List</h4>
        <h6>Total Orders: {orders.length}</h6>
        <OrderListTable orders={orders} />
      </div>
    </div>
  );
};

export default OrderList;
