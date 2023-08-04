// import React, { useContext } from "react";
// import "./WeatherFive.css";
// import { ApiFiveContext } from "../../context/ApiFiveContext";
// import { fiveDaysResponse } from "../../data/ResponseMock"

// const WeatherFive = () => {
//   const { apiFiveDays } = useContext(ApiFiveContext);

// //   apiFiveDays.forEach((element) => {
// //     let date = element.dt_txt;
// //     let dateShorten = date.slice(5, 10);
// //     let finalDate = dateShorten.replace(/^(\d{2})-(\d{2})$/g, "$2/$1");
// // })
// console.log(apiFiveDays); // (5) [{…}, {…}, {…}, {…}, {…}]
//   return (
//     <>
//       <div className="five-weather">
//         {Object.keys(apiFiveDays).map((dayKey) => {
//           // const day = apiFiveDays[dayKey];

//           return (
//             <div key={dayKey} className="each-day-weather">
//               <p>{apiFiveDays.dt_txt}</p>
//               <img
//                 src={`../../../src/assets/icons/${apiFiveDays.weather[0].icon}.png`}
//                 alt={apiFiveDays.weather[0].description}
//               />
//               <div className="temp-cont">
//                 <div className="temp">
//                   <img src="../src/assets/temp-max.png" alt="máximas" />
//                   <p>{Math.round(apiFiveDays.main.temp_max)}</p>
//                 </div>
//                 <div className="temp">
//                   <img src="../src/assets/temp-min.png" alt="mínimas" />
//                   <p>{Math.round(apiFiveDays.main.temp_min)}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default WeatherFive;
import React, { useContext } from "react";
import "./WeatherFive.css";
import { ApiFiveContext } from "../../context/ApiFiveContext";
import { fiveDaysResponse } from "../../data/ResponseMock";

const WeatherFive = () => {
  const { apiFiveDays } = useContext(ApiFiveContext);

  return (
    <>
      <div className="five-weather">
        {apiFiveDays.map((day) => {
          const date = day.dt_txt;
          const dateShorten = date.slice(5, 10);
          const finalDate = dateShorten.replace(/^(\d{2})-(\d{2})$/g, "$2/$1");

          return (
            <div key={day.dt_txt} className="each-day-weather">
              <p>{finalDate}</p>
              <img
                src={`./assets/icons/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
              />
              <div className="temp-cont">
                <div className="temp">
                  <img src="./assets/temp-max.png" alt="máximas" />
                  <p>{Math.round(day.main.temp_max)}</p>
                </div>
                <div className="temp">
                  <img src="./assets/temp-min.png" alt="mínimas" />
                  <p>{Math.round(day.main.temp_min)}</p>
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