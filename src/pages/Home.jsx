import React, { useContext, useState, useEffect } from "react";
import Weather from "../components/Weather/Weather";
import { ApiContext } from "../context/ApiContext";
import useApi from "../hooks/useApi";

const Home = () => {
  const { apiInfo } = useContext(ApiContext);
  const [tabletOrLess, setTabletOrLess] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setTabletOrLess(true);
    }
  }, []);
  return (
    <div
      className="app"
      style={
        tabletOrLess
          ? {
              backgroundImage: `url("./assets/backgrounds/${apiInfo.weather[0].icon}-portrait.jpg")`,
            }
          : {
              backgroundImage: `url("./assets/backgrounds/${apiInfo.weather[0].icon}-landscape.jpg")`,
            }
      }
    >
      <Weather tabletOrLess={tabletOrLess} />
    </div>
  );
};

export default Home;
