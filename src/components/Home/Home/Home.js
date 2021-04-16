import React from "react";
import Header from "../Header/Header";
import ServiceProfile from "../ServiceProfile/ServiceProfile";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <ServiceProfile></ServiceProfile>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
