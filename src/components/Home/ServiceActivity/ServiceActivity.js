import React from "react";

const ServiceActivity = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-info">
        We Aim to Contribute Well to Your Company
      </h2>
      <div className="row my-3 mt-5 justify-content-center ">
        <div className="col-md-6 my-2 card2">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-cash fs-1"></i>{" "}
              <h5 className="card-title">Trasparent Pricing</h5>
              <h6>We are commited to serve</h6>
              <button className="myButton">Explore Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-2 card2">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-truck fs-1"></i>{" "}
              <h5 className="card-title">On-Time Delivery</h5>
              <h6>We are commited to serve</h6>
              <button className="myButton">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 justify-content-center">
        <div className="col-md-6 my-2 card2">
          <div className="card text-center ">
            <div className="card-body">
              <i className="bi bi-calendar4-range fs-1"></i>{" "}
              <h5 className="card-title">Real Time Tracking</h5>
              <h6>We are commited to serve</h6>
              <button className="myButton">Explore Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-2 card2">
          <div className="card text-center ">
            <div className="card-body">
              <i className="fs-1 bi bi-headset"></i>
              <h5 className="card-title">Online Support</h5>
              <h6>We are commited to serve</h6>
              <button className="myButton">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceActivity;
