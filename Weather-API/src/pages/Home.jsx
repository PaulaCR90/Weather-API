// El tiempo según ubicación.
import React, { useContext } from "react";
import Weather from "../components/Weather/Weather";
import WeatherFive from "../components/WeatherFive/WeatherFive";
import Spinner from "../components/Spinner/Spinner";
import { ApiContext } from "../context/ApiContext";
import CallApi from "../components/CallApi/CallApi";

const Home = () => {
  const { apiInfo } = useContext(ApiContext);
  return (
    <>
      {apiInfo ? (
        <main>
            <>
              <Weather />
              <WeatherFive />
            </>     
        </main>
      ) : (
        <main><Spinner /></main>
      )}
    </>
  );
};

export default Home;
