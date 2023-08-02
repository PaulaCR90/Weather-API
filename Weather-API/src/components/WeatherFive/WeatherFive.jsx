import React, { useContext } from "react";
import { ApiFiveContext } from "../../context/ApiFiveContext";
import "./WeatherFive.css";

const WeatherFive = () => {
  const { apiFiveDays } = useContext(ApiFiveContext);
  let date = apiFiveDays.list[0].dt_txt;
  let texto = date.slice(5, 10);
  let finalDate = texto.replace(/^(\d{2})-(\d{2})$/g, "$2/$1");

  return (
    <>
      <div className="five-weather">
        {Object.keys(apiFiveDays).map((dayKey) => {
          // const day = apiFiveDays[dayKey];

          return (
            <div key={dayKey} className="each-day-weather">
              <p>{finalDate}</p>
              <img
                src={`http://openweathermap.org/img/wn/${apiFiveDays.list[0].weather[0].icon}@2x.png`}
                alt={apiFiveDays.list[0].weather[0].description}
              />
              <div className="temp-cont">
                <div className="temp">
                  <img src="../src/assets/temp-max.png" alt="máximas" />
                  <p>{apiFiveDays.list[0].main.temp.temp_max}</p>
                </div>
                <div className="temp">
                  <img src="../src/assets/temp-min.png" alt="mínimas" />
                  <p>{apiFiveDays.list[0].main.temp.temp_min}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeatherFive;
