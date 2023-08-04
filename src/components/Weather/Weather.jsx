import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import "./Weather.css";
import { format, utcToZonedTime } from "date-fns-tz";
import Select from "../Select/Select";

const Weather = ({ tabletOrLess }) => {
  const { apiInfo } = useContext(ApiContext);
  const sunriseUtcTime = apiInfo.sys.sunrise;
  const sunsetUtcTime = apiInfo.sys.sunset;

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const sunriseLocalDate = utcToZonedTime(
    new Date(sunriseUtcTime * 1000),
    timeZone
  );
  const sunsetLocalDate = utcToZonedTime(
    new Date(sunsetUtcTime * 1000),
    timeZone
  );
  const sunriseHours = sunriseLocalDate.getHours();
  const sunriseMinutes = sunriseLocalDate.getMinutes();
  const sunriseSeconds = sunriseLocalDate.getSeconds();

  const sunsetHours = sunsetLocalDate.getHours();
  const sunsetMinutes = sunsetLocalDate.getMinutes();
  const sunsetSeconds = sunsetLocalDate.getSeconds();

  return (
    <>
      {tabletOrLess ? (
        <article>
          <div className="main-weather">
            <h3>{apiInfo.name}</h3>
            <p>{apiInfo.weather[0].description}</p>
            <img
              src={`./assets/icons/${apiInfo.weather[0].icon}.png`}
              alt="icono tiempo"
            />
            <p>{Math.round(apiInfo.main.temp)} °C</p>
            <div className="temp-container">
              <div className="temp">
                <img src="./assets/temp-max.png" alt="máximas" />
                <p>{Math.round(apiInfo.main.temp_max)} °C</p>
              </div>
              <span>/</span>
              <div className="temp">
                <img src="./assets/temp-min.png" alt="mínimas" />
                <p>{Math.round(apiInfo.main.temp_min)} °C</p>
              </div>
            </div>
          </div>
        </article>
      ) : (
        <article>
          <div className="main-conditions">
            <p>
              <img
                src="https://media.giphy.com/media/cIfj6F7459CVOsrOlN/giphy.gif"
                alt="sensación térmica"
              />
              Sensación térmica: {Math.round(apiInfo.main.feels_like)} °C
            </p>
            <p>
              <img src="./assets/icons/visibility.png" alt="visibilidad" />
              Visibilidad: {apiInfo.visibility}
            </p>
            <p>
              <img src="./assets/icons/humidity.png" alt="humedad" />
              Humedad: {apiInfo.main.humidity}%
            </p>
          </div>
          <div className="main-weather">
            <h3>{apiInfo.name}</h3>
            <p>{apiInfo.weather[0].description}</p>
            <img
              src={`./assets/icons/${apiInfo.weather[0].icon}.png`}
              alt="icono tiempo"
            />
            <p>{Math.round(apiInfo.main.temp)} °C</p>
            <div className="temp-container">
              <div className="temp">
                <img src="./assets/temp-max.png" alt="máximas" />
                <p>{Math.round(apiInfo.main.temp_max)} °C</p>
              </div>
              <span>/</span>
              <div className="temp">
                <img src="./assets/temp-min.png" alt="mínimas" />
                <p>{Math.round(apiInfo.main.temp_min)} °C</p>
              </div>
            </div>
          </div>
          <div className="main-conditions">
            <p>
              <img src="./assets/icons/wind.png" alt="viento" />
              Viento: {apiInfo.wind.speed} km/h
            </p>
            <p>
              <img src="./assets/icons/sunrise.png" alt="sunrise" />
              Amanecer: {sunriseHours}:{sunriseMinutes}:{sunriseSeconds}
            </p>
            <p>
              <img src="./assets/icons/sunset.png" alt="sunset" />
              Atardecer: {sunsetHours}:{sunsetMinutes}:{sunsetSeconds}
            </p>
          </div>
        </article>
      )}
    </>
  );
};

export default Weather;
