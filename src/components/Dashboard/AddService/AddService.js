import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import "./AddService.css";

const AddService = () => {
  const [imgURL, setImgURL] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm();

  // submit form
  const onSubmit = (data) => {
    const serviceData = {
      serviceName: data.serviceName,
      description: data.description,
      fee: data.fee,
      imgURL: imgURL,
    };
    const url = `http://localhost:9090/addService`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceData),
    }).then((res) => {
      alert("Service added successfully.");
    });
  };

  // upload images
  const handleImageUpload = (e) => {
    const imgData = new FormData();
    imgData.set("key", "681354ee434466a79bb386e524a1ce29");
    imgData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImgURL(response.data.data.display_url);
        alert("Image upload successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <div className="container">
          <h3 className="mt-2">Add Service</h3>
          <div className="mt-3 addBookContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="">Service Title</label>
                  <input
                    name="serviceName"
                    className="form-control mt-3"
                    type="text"
                    placeholder="Enter Name"
                    ref={register}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Service Description</label>
                  <input
                    name="description"
                    className="form-control mt-3"
                    type="text"
                    placeholder="Enter Name"
                    ref={register}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="mt-3" htmlFor="">
                    Service Fee
                  </label>
                  <input
                    name="fee"
                    className="form-control mt-3"
                    type="text"
                    placeholder="Enter Price"
                    ref={register}
                  />
                </div>
                <div className="col-md-6">
                  <label className="mt-3" htmlFor="">
                    Upload Image
                  </label>
                  <input
                    className="form-control mt-3"
                    type="file"
                    name=""
                    id=""
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              <input
                className="btn saveButton mt-5 float-end"
                type="submit"
                value="Save"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;