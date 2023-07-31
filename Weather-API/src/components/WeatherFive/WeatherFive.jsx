import React, { useContext } from "react";
import { ApiFiveContext } from "../../context/ApiFiveContext";

const WeatherFive = () => {
  const { apiFiveDays } = useContext(ApiFiveContext);

  // Convert the object properties to an array of keys
  const daysKeys = Object.keys(apiFiveDays);

  return (
    <>
      <div className="five-weather">
        {daysKeys.map((dayKey) => {
          const day = apiFiveDays[dayKey];

          return (
            <div key={dayKey} className="each-day-weather">
              <p>{day.fecha}</p>
              <img
                src={`http://openweathermap.org/img/wn/${apiFiveDays.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
              <div className="temp">
                <img src="../../assets/temp-max.png" alt="máximas" />
                <p>{day.máximas}</p>
              </div>
              <div className="temp">
                <img src="../../assets/temp-min.png" alt="mínimas" />
                <p>{day.mínimas}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeatherFive;
