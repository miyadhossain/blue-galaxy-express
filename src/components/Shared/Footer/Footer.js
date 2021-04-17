import React from "react";
import FooterCol from "../FooterCol/FooterCol";
import "./Footer.css";

const Footer = () => {
  const about = [
    { name: "History" },
    { name: "Our Staff" },
    { name: "Our Partners" },
    { name: "Blog" },
  ];
  const ourAddress = [
    { name: "2307 Brooklyn, New York" },
    { name: "11226 United States." },
  ];
  const industries = [
    { name: "Retail & Consumer" },
    { name: "Sciences & Healthcare" },
    { name: "Industrial & Chemical" },
    { name: "Power Generation" },
    { name: "Food & Beverage" },
    { name: "Oil & Gas" },
  ];
  const services = [
    { name: "Warehouse" },
    { name: "Air Freight" },
    { name: "Ocean Freight" },
    { name: "Road Freight" },
    { name: "Supply Chain" },
    { name: "Packaging" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5 text-center">
          <FooterCol className="" key={1} menuTitle={"About"} menuItems={about}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a target="_blank" rel="noreferrer" href="//facebook.com">
                  <i className="bi bi-facebook fs-3 text-info"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" rel="noreferrer" href="//google.com">
                  <i className="bi bi-google fs-3 text-info"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" rel="noreferrer" href="//instagram.com">
                  <i className="bi bi-instagram fs-3 text-info"></i>
                </a>
              </li>
            </ul>
          </FooterCol>
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={3} menuTitle="Industries" menuItems={industries} />
          <FooterCol key={4} menuTitle="Quick Contact" menuItems={ourAddress}>
            <div className="mt-5">
              <button className="btn btn-info">
                <span className="fs-6 text-dark fw-bold">
                  <i className="bi bi-telephone-outbound-fill"></i>{" "}
                  +100010002000
                </span>
              </button>
            </div>
          </FooterCol>
        </div>
        <div className="text-center ">
          <p className="text-info">
            Copyright {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
