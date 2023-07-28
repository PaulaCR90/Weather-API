import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";

const Weather = () => {
  const { apiInfo } = useContext(ApiContext)
  return (
    <>
      <div className="main-weather">
        <h3>{apiInfo.localización}</h3>
        <p>{apiInfo.temperatura} °C</p>
        <p>{apiInfo.descripción}</p>
        <div className="temp">
          <img
            src="http://openweathermap.org/img/w/${apiInfo.condiciones}.png"
            alt={apiInfo.descripción}
          />
          <p>{apiInfo.máximas}</p>
        </div>
        <div className="temp">
          <img src="" alt="" />
          <p>{apiInfo.mínimas}</p>
        </div>
      </div>
    </>
  );
};

export default Weather;
