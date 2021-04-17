import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://radiant-coast-42824.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-center text-info">Our Services</h2>
        <div className="row">
          <div className="col-md-12 justify-content-center">
            <div className="row justify-content-center">
              {services.length === 0 && (
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden"></span>
                </div>
              )}
              {services.map((service) => (
                <Service key={service._id} service={service}></Service>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
