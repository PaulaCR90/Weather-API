import React, { useContext } from "react";
import Weather from "../components/Weather/Weather";
import WeatherFive from "../components/WeatherFive/WeatherFive";
import Select from "../components/Select/Select";
import { ApiContext } from "../context/ApiContext";

const Home = ({ tabletOrLess }) => {
  const { apiInfo } = useContext(ApiContext);
  return (
    <main
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
      <Select />
      <Weather tabletOrLess={tabletOrLess} />
      <WeatherFive />
    </main>
  );
};

export default Home;
