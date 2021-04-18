import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://radiant-coast-42824.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // handle delete
  const handleDelete = (id) => {
    fetch(`https://radiant-coast-42824.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Delete successfully.");
      });
  };
  return (
    <div className="row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Manage Services</h5>
        <p className="fw-bold">Total Service collection : {services.length}</p>
        <table className="table table-hover table-borderless mt-3">
          <thead>
            <tr className="bookHeading">
              <th scope="col"></th>
              <th scope="">Service Name</th>
              <th scope="">Service Image</th>
              <th scope="">Service Fee</th>
              <th scope="">Action</th>
            </tr>
          </thead>
          {services.map((service) => (
            <tbody key={service._id}>
              <tr>
                <th scope="row"></th>
                <td>{service.serviceName}</td>
                <td>
                  <img style={{ width: "30px" }} src={service.imgURL} alt="" />
                </td>
                <td>${service.fee}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleDelete(service._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageServices;
