import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
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
  useEffect(() => {
    if (!apiInfo && loading) {
      const timeoutId = setTimeout(() => {
        setShowNotFound(true);
      }, 8000);
      return () => clearTimeout(timeoutId);
    }
  }, [apiInfo, loading]);

  return (
    <>
      {loading && !apiInfo ? (
        <Spinner />
      ) : showNotFound ? (
        <NotFound />
      ) : (
        <>
          <Home tabletOrLess={tabletOrLess} />
        </>
      )}
    </>
  );
}

export default App;
