import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const [imgURL, setImgURL] = useState(null);

  // submit form
  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      designation: data.designation,
      description: data.description,
      imgURL: imgURL,
    };
    const url = `https://radiant-coast-42824.herokuapp.com/addReviews`;
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
        style={{ position: "absolute", right: 0, backgroundColor: "#DBE0FE" }}
      >
        <h3 className="mt-2">Add Service</h3>
        <div className="container table_container mt-3">
          <div className="mt-3 addBookContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="">Name</label>
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    placeholder="Your Name"
                    ref={register}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Designation</label>
                  <input
                    name="designation"
                    className="form-control"
                    type="text"
                    placeholder="Company's name Designation"
                    ref={register}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="mt-3" htmlFor="">
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Enter Description"
                    ref={register}
                    class="form-control"
                    rows="3"
                  ></textarea>
                  <label className="mt-3" htmlFor="">
                    Upload Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    name=""
                    id=""
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              <input
                className="myButton mt-5 float-end"
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

export default Review;
