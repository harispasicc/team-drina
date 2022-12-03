import React from "react";

//Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="home">
      <video autoPlay muted loop id="myVideo">
        <source
          src="https://static.videezy.com/system/resources/previews/000/038/011/original/abstract_line4.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Home;
