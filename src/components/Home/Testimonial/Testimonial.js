import React from "react";

const Testimonial = ({ review }) => {
  const { name, designation, description, imgURL } = review;
  return (
    <div className="card shadow-sm">
      <div className="card-body mx-auto">
        <img className="mx-3" src={imgURL} alt="" width="60" />
        <h6 className="text-primary">{name}</h6>
        <h5 className="text-primary">{designation}</h5>
      </div>
      <div className="card-footer d-flex  align-items-center">
        <div>
          <p className="m-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
