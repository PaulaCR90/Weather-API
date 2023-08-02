import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import CallApi from "./components/CallApi/CallApi";
import { ApiContext } from "./context/ApiContext";

function App() {
  const { apiInfo } = useContext(ApiContext);

  return (
    <>
      {/* {apiInfo ? (
        <>
          <Home />
          <Footer />
        </>
      ) : (
        <CallApi />
      )} */}
    </>
  );
}

export default App;
