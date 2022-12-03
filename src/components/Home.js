import React, { useState, useEffect } from "react";
import { getPictures } from "../api/dog-api";
import { firstNames } from "../api/first-names";

const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

function Home() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const newPets = [];
    getPictures(5, (pictures) => {
      pictures.map((img, i) => {
        console.log(firstNames, firstNames.lenght, randomNum(10));
        const name = firstNames[randomNum(4946)];
        console.log(name);
        newPets.push({ name: name, img: img, age: randomNum(8) });
      });
    });
    setPets(newPets);
    console.log(newPets);
  }, []);

  return (
    <div className="home">
      <video autoPlay muted loop id="myVideo">
        <source
          src="https://static.videezy.com/system/resources/previews/000/038/011/original/abstract_line4.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
