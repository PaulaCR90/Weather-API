// El tiempo en cinco ciudades.
import React, { useContext } from "react";
import { SelectContext } from "../context/SelectContext";
import Weather from "../components/Weather/Weather";
import WeatherFive from "../components/WeatherFive/WeatherFive";

const FiveCities = () => {
  const { selectValue } = useContext(SelectContext);
  return (
    <>
      <article style={{backgroundImage: URL(`../assets/${selectValue}-background.jpg`)}}>
        <h4>{selectValue}</h4>
        <Weather />
        <WeatherFive />
      </article>
    </>
  );
};

export default FiveCities;
