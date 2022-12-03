import React, { useState, useEffect, useContext } from "react";
import { getPictures } from "../api/dog-api";
import { firstNames } from "../api/first-names";
import Card from "./Card";
import { Context } from "../contexts/Contexts";

const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

const message = [
  "Forever loved",
  "If love could have saved you",
  "You would have lived forever",
  "We will never forget you",
  "You left a paw print on our fearts",
  "No longer by my side but always in my heart",
];

function Home() {
  const [pets, setPets] = useState([]);
  const { show, showOptions, search } = useContext(Context);

  useEffect(() => {
    let newPets = [];
    getPictures(20, (pictures) => {
      pictures.map((img) => {
        const name = firstNames[randomNum(4946)];
        const newPet = {
          name: name,
          img: img,
          age: randomNum(8),
          message: message[randomNum(6)],
        };
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
      {!show && !showOptions && (
        <div className="cards">
          {pets
            .filter((pet) =>
              pet.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((pet, i) => (
              <Card {...pet} key={i} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
