import React from "react";
import "./ServiceProfile.css";

const ServiceProfile = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center text-info">Our Service Activity</h2>
      <div className="profile_container mt-5">
        <div class="container ">
          <div class="row d-flex align-items-center justify-content-center text-center">
            <div class="col-sm profile_text info">
              <h2>106</h2>
              <h4>Connected Countries</h4>
            </div>
            <div class="col-sm profile_text info">
              <h2 className="info-text">300K+</h2>
              <h4>Closed Shipment</h4>
            </div>
            <div class="col-sm profile_text info">
              <h2>80K+</h2>
              <h4>Satisfied Clients</h4>
            </div>
            <div class="col-sm profile_text info">
              <h2>80K+</h2>
              <h4>Satisfied Clients</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProfile;
