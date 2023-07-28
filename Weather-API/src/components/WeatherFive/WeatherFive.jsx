import React, { useContext } from "react";
import { ApiFiveContext } from "../../context/ApiFiveContext";

const WeatherFive = () => {
  const {apiFiveDays} = useContext(ApiFiveContext)
  return (
    <>
      <div className="five-weather">
        {apiFiveDays.map((day) => {
          <div className="each-day-weather">
            <p>{apiFiveDays.fecha}</p>
            <img
              src="http://openweathermap.org/img/w/${apiFiveDays.condiciones}.png"
              alt={apiFiveDays.descripción}
            />
            <div className="temp">
              <img src="../../assets/temp-max.png" alt="máximas" />
              <p>{apiFiveDays.máximas}</p>
            </div>
            <div className="temp">
              <img src="../../assets/temp-min.png" alt="mínimas" />
              <p>{apiFiveDays.mínimas}</p>
            </div>
          </div>;
        })}
      </div>
    </>
  );
};

export default WeatherFive;
