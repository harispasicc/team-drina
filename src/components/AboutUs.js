import React from "react";
import "../assets/styles/about-us.css";
import logo from "../assets/images/logo.png";

function AboutUs() {
  return (
    <div>
      <h2 className="text-center text-primary">About Us</h2>
      <img className="logo align-middle" src={logo} alt="logo" />
      <div className="text-secondary fs-5 fw-semibold about-text">
        We are your partner in distress. Pets are our family members and we
        treat them with respect. In dark hours of parting our ways, we provide
        support organizing appropriate funeral. Fill form or contact us for more
        information.
      </div>
    </div>
  );
}

export default AboutUs;
