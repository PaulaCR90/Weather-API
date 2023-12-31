import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import useApi from "./hooks/useApi";
import Spinner from "./components/Spinner/Spinner";
import NotFound from "./pages/404";

function App() {
  const { loading, apiInfo } = useApi();
  const [tabletOrLess, setTabletOrLess] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setTabletOrLess(true);
    }
  }, []);
  return (
    <>
      <div className="app">
        <Header tabletOrLess={tabletOrLess} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
