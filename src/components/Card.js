import { useState } from "react";
import "../assets/styles/card.css";
import Wings from "../assets/images/wings.png";

const randomNum = num => {
  return Math.floor(Math.random() * num);
};

const Card = ({ name = "Max", age = 3, img, message }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div className="flip-card card">
      <div
        className={`flip-card-inner ${flip ? "flip" : ""}`}
        onMouseEnter={() => {
          setFlip(true);
        }}
        onMouseLeave={() => {
          setFlip(false);
        }}
      >
        <div className="flip-card-front">
          <div className="front-card-content">
            <img className="image" src={img} alt="Pet" />
            <div className="message">{message}</div>
            <div className="name fs-5 fw-light">{name}</div>
          </div>
        </div>
        <div className="flip-card-back">
          <img className="wings" src={Wings} alt="" srcset="" />
          <div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
