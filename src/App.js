import React, { useState } from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ModalMemo from "./components/ModalMemo";
import Options from "./components/Options";
import Card from "./components/Card";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Context } from "./contexts/Contexts";

function App() {
  const [show, setShow] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleShow = () => setShow(true);

  const handleCancelShow = () => {
    setShow(false);
  };

  const handleShowOptions = () => {
    setShowOptions(true);
  };

  const handleCancelOptions = () => {
    setShowOptions(false);
  };
  return (
    <Context.Provider
      value={{
        show,
        setShow,
        handleShow,
        handleShowOptions,
        showOptions,
        setShowOptions,
        handleCancelOptions,
        handleCancelShow,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Card />
        {show && <ModalMemo />}
        {showOptions && <Options />}
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
