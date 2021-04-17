import React from "react";
import { useHistory } from "react-router";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, imgURL, serviceName, description, fee } = service;
  const history = useHistory();
  const hanldeBuy = () => {
    history.push(`/book/${_id}`);
  };
  return (
    <div
      onClick={hanldeBuy}
      className="card2 service_container"
      style={{ cursor: "pointer" }}
    >
      <div className="justify-content-center align-items-center">
        <img
          style={{ width: "200px", height: "100px" }}
          className="icon mx-auto d-block rounded"
          src={imgURL}
          alt=""
        />
      </div>
      <div className="text-center">
        <h3 className="fw-bold">{serviceName}</h3>
        <p>{description}</p>
        <h3>${fee}</h3>
        <div class="go-corner" href="#">
          <div class="go-arrow">→</div>
        </div>
      </div>
    </div>
  );
};

export default Service;
