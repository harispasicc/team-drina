import { useState } from "react";
import "../assets/styles/card.css";
import picture from "../assets/images/Max.jpg";

const Card = ({ name = "Max", age = 3, legs = 4 }) => {
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
          <img src={picture} alt="Pet" style={{ width: "140px" }} />
        </div>
        <div className="flip-card-back">
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
