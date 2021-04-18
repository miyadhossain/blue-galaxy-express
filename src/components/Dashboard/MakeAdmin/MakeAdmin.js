import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  // submit form
  const onSubmit = (data) => {
    const adminData = {
      adminEmail: data.email,
    };
    const url = `https://radiant-coast-42824.herokuapp.com/makeAdmin`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminData),
    }).then((res) => {
      alert("Admin added successfully.");
    });
  };

  return (
    <div className="row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#DBE0FE" }}
      >
        <div className="container">
          <h3 className="mt-2">Add Admin</h3>
          <div className="mt-3 addBookContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="">Email</label>
                  <input
                    name="email"
                    className="form-control mt-3"
                    type="text"
                    placeholder="Enter Email"
                    ref={register}
                  />
                </div>
              </div>

              <input
                className="myButton mt-5 float-end"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
