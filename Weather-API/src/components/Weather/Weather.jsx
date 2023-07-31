import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import Spinner from "../Spinner/Spinner";
import './Weather.css'

const Weather = () => {
  const { apiInfo } = useContext(ApiContext);
  return (
    <>
    {apiInfo ? 
    (<div className="main-weather">
          <h3>{apiInfo.name}</h3>
          {/* <p>{apiInfo.main.temp} °C</p> */}
          {/* <p>{apiInfo.weather[0].description}</p> */}
          <div className="temp">
            <img
              src="../src/assets/temp-max.png"
              alt={apiInfo.descripción}
            />
            {/* <p>{apiInfo.main.temp_max}</p> */}
          </div>
          <div className="temp">
            <img src="../src/assets/temp-min.png" alt="" />
            {/* <p>{apiInfo.main.temp_min}</p> */}
          </div>
        </div>) : <NotFound />}
    </>
  );
};

export default Weather;
