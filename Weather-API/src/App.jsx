import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import CallApi from "./components/CallApi/CallApi";
import { ApiContext } from "./context/ApiContext";
import NotFound from "./pages/404";

function App() {
  const { apiInfo } = useContext(ApiContext);
  const [tabletOrLess, setTabletOrLess] = useState(false);
  CallApi();
  useEffect(() => {
    if (window.innerWidth < 700) {
      setTabletOrLess(true);
    }
  }, [window.innerWidth]);
  // ver diferencia con/sin dependencias.

  return (
    <>
      <Home />
      <Footer />
      {/* {apiInfo ? (
        <>
          <Home />
          <Footer />
        </>
      ) : (
        <NotFound />
      )} */}
    </>
  );
}

export default App;
