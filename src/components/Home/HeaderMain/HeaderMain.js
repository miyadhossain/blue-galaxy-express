import React from "react";
import Ship1 from "../../../images/ship1.jpg";
import Ship2 from "../../../images/ship2.jpg";
import Ship3 from "../../../images/ship3.jpg";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            style={{ height: "500px" }}
            src={Ship1}
            className="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-md-block justify-content-center align-items-center">
            <h1>We Care your Dream!</h1>
            <button className="btn btn-info">Our Service</button>
          </div>
        </div>
        <div className="carousel-item">
          <img
            style={{ height: "500px" }}
            src={Ship2}
            className="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <h1>We Care your Cargo!</h1>
            <button className="btn btn-info">Our Service</button>
          </div>
        </div>
        <div className="carousel-item">
          <img
            style={{ height: "500px" }}
            src={Ship3}
            className="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <h1>We are commited to serve you!</h1>
            <button className="btn btn-info">Our Service</button>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default HeaderMain;
