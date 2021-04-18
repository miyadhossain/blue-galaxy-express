import React from "react";
import Sidebar from "../Sidebar/Sidebar";
const containerStyle = {
  backgroundColor: "#F4FDFB",
};

const Dashboard = () => {
  return (
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
          <h1>Dashboard</h1>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
