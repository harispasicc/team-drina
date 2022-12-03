import React, { useState, useEffect } from "react";
import "../assets/styles/about-us.css";
import logo from "../assets/images/logo.png";
import map from "../assets/images/map.png";

function AboutUs() {
  const [pets, setPets] = useState(Math.round(Math.random() * 1000) + 1500);
  useEffect(() => {
    let interval = setInterval(() => {
      const newPets = Math.round(Math.random() * 5);
      setPets(pets => pets + newPets);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2 className="text-center text-primary"> </h2>
      <div className="logo-wrapper">
        <img className="logo align-middle" src={logo} alt="logo" />
      </div>

      <div className="text-secondary fs-5 fw-semibold about-text">
        We are your partner in distress. Pets are our family members and we
        treat them with respect. In dark hours of parting our ways, we provide
        support organizing appropriate funeral. <br />
        Fill form or contact us for more information. <br />
        <b>{pets}</b> pets accompanied to light.
      </div>
      <div className="map-wrapper">
        <img className="map align-middle" src={map} alt="map" />
      </div>
    </div>
  );
}

export default AboutUs;
