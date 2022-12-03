import { useState } from "react";
import "../assets/styles/card.css";
import Wings from "../assets/images/wings.png";

const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

const Card = ({ name = "Max", age = 3, legs = 4, img }) => {
  const [flip, setFlip] = useState(false);
  const message = [
    "Forever loved",
    "If love could have saved you",
    "You would have lived forever",
    "We will never forget you",
    "You left a paw print on our fearts",
    "No longer by my side but always in my heart",
  ];

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
            <div className="message">{message[randomNum(6)]}</div>
            <div className="name fs-5 fw-light">{name}</div>
          </div>
        </div>
        <div className="flip-card-back">
          <img className="wings" src={Wings} alt="" srcset="" />
          <div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Legs: {legs}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
