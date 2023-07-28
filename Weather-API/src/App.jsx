import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { CoordsContext } from "./context/CoordsContext";

function App() {
  const [tabletOrLess, setTabletOrLess] = useState(false);
  const {changeCoords, latitude} = useContext(CoordsContext)
  useEffect(() => {
    changeCoords();
    if (window.innerWidth < 700) {
      setTabletOrLess(true);
    }
  }, []);

  return (
    <>
      <Header tabletOrLess={tabletOrLess} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
