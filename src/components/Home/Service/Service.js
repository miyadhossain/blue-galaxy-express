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
    <div onClick={hanldeBuy} className="service_container">
      <div class="card2" href="#">
        <img style={{ width: "200px" }} src={imgURL} alt="" />
        <h3>{serviceName}</h3>
        <p class="small">{description}</p>
        <h3>${fee}</h3>
        <div class="go-corner" href="#">
          <div class="go-arrow">→</div>
        </div>
      </div>

      <div
        onClick={hanldeBuy}
        className="card"
        style={{ width: "18rem", margin: "30px", cursor: "pointer" }}
      >
        <div
          className="justify-content-center align-items-center bookCard"
          style={{ backgroundColor: "#F1F1F1", borderRadius: "10px" }}
        >
          <img className="icon mx-auto d-block w-75" src={imgURL} alt="" />
        </div>
        <div className="card-body text-center">
          <h5 className="fw-bold">{serviceName}</h5>
          <p>{description}</p>
          <div className="d-flex justify-content-between align-items-center ">
            <span>
              <h4 className="priceTag">${fee}</h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
