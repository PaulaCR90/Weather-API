import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import NotFound from "../../pages/404";
import "./Weather.css";
import Select from "../Select/Select";

const Weather = () => {
  const { apiInfo } = useContext(ApiContext);
  return (
    <>
      {apiInfo ? (
        <main>
          <Select />
          <div className="main-weather">
            <h3>{apiInfo.name}</h3>
            <p>{apiInfo.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${apiInfo.weather[0].icon}@2x.png`}
              alt="icono tiempo"
            />

            <p>{Math.round(apiInfo.main.temp)} °C</p>

            <div className="temp-container">
              <div className="temp">
                <img
                  src="../src/assets/temp-max.png"
                  alt={apiInfo.descripción}
                />
                <p>{Math.round(apiInfo.main.temp_max)} °C</p>
              </div>
              <span>/</span>
              <div className="temp">
                <img src="../src/assets/temp-min.png" alt="" />
                <p>{Math.round(apiInfo.main.temp_min)} °C</p>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Weather;
