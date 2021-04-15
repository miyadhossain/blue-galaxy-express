import React from "react";
import LogisticImg from "../../../images/logistic.jpg";

const HeaderMain = () => {
  return (
    <main className="row d-flex align-items-center">
      <div className="col-md-4 col-sm-6 col-12 offset-md-1">
        <h1 className="" style={{ color: "#3A4256" }}>
          We Care your Products!
        </h1>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          eveniet necessitatibus et iusto corrupti minima.
        </p>
      </div>
      <div className="col-md-6 col-sm-6 col-12">
        <img src={LogisticImg} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
