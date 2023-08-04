import React, { useContext } from "react";
import Weather from "../components/Weather/Weather";
import WeatherFive from "../components/WeatherFive/WeatherFive";
import Select from "../components/Select/Select";
import { ApiContext } from "../context/ApiContext";
import Footer from "../components/Footer/Footer";

const Home = ({ tabletOrLess }) => {
  const { apiInfo } = useContext(ApiContext);
  return (
    <>
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
        <Footer />
      </main>
    </>
  );
};

export default Home;
