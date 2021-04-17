import React from "react";
import "./ServiceProfile.css";

const ServiceProfile = () => {
  return (
    <div className="profile_container">
      <div class="container ">
        <div class="row d-flex align-items-center justify-content-center text-center">
          <div class="col-sm text-white info">
            <h4>106</h4>
            <h6>Connected Countries</h6>
          </div>
          <div class="col-sm text-white info">
            <h4 className="info-text">300K+</h4>
            <h6>Closed Shipment</h6>
          </div>
          <div class="col-sm text-white info">
            <h4>80K+</h4>
            <h6>Satisfied Clients</h6>
          </div>
          <div class="col-sm text-white info">
            <h4>80K+</h4>
            <h6>Satisfied Clients</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProfile;
