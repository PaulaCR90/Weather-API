import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import CallApi from "./components/CallApi/CallApi";

function App() {
  const [tabletOrLess, setTabletOrLess] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setTabletOrLess(true);
    }
  }, []);

  return (
    <>      
      {/* <CallApi /> */}
      <Header tabletOrLess={tabletOrLess} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
