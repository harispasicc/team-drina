import { useState } from "react";
import "../assets/styles/card.css";
import Wings from "../assets/images/wings.png";

const Card = ({ name = "Max", age = 3, legs = 4, img }) => {
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
          <div>
            <div className="name fs-5 fw-light">{name}</div>
            <img src={img} alt="Pet" style={{ width: "140px" }} />
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
