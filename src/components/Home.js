import React, { useState, useEffect } from "react";
import { getPictures } from "../api/dog-api";
import { firstNames } from "../api/first-names";
import Card from "./Card";

const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

function Home() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    let newPets = [];
    getPictures(20, (pictures) => {
      pictures.map((img) => {
        const name = firstNames[randomNum(4946)];
        const newPet = { name: name, img: img, age: randomNum(8) };
        newPets.push(newPet);
      });
      setPets(newPets);
    });
  }, []);

  return (
    <div className="home">
      <video autoPlay muted loop id="myVideo">
        <source
          src="https://static.videezy.com/system/resources/previews/000/038/011/original/abstract_line4.mp4"
          type="video/mp4"
        />
      </video>
      <div className="cards">
        {pets.map((pet, i) => (
          <Card {...pet} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Home;
