import React, { useContext } from "react";
import Weather from "../components/Weather/Weather";
import WeatherFive from "../components/WeatherFive/WeatherFive";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header"
import { ApiContext } from "../context/ApiContext";

const Home = ({ tabletOrLess }) => {
  const { apiInfo } = useContext(ApiContext);
  return (
    <div className="body"
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
          <Header />
      <main>
        <Weather tabletOrLess={tabletOrLess} />
        <WeatherFive />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
