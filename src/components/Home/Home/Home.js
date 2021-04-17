import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import ServiceActivity from "../ServiceActivity/ServiceActivity";
import ServiceProfile from "../ServiceProfile/ServiceProfile";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <ServiceActivity></ServiceActivity>
      <ServiceProfile></ServiceProfile>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
