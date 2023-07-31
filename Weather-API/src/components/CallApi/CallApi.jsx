import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { ApiContext } from "../../context/ApiContext";
import { ApiFiveContext } from "../../context/ApiFiveContext";

const CallApi = () => {
  const { setApiInfo } = useContext(ApiContext);
  const { setApiFiveDays } = useContext(ApiFiveContext);
  const [location, setLocation] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    const getLocation = () => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          setLocation({ latitude, longitude });
        });
      } else {
        alert(`😵‍💫 Tu ubicación está desactivada...\n¡Actívala para continuar!`);
      }
    };
    getLocation();
  }, [location]);

  useEffect(() => {
    if (location) {
      const API_KEY = "3475019ae4481bceaf9ea6dd818241fe";
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      const API_URL_fiveDays = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      axios.get(API_URL).then((res) => setApiInfo(res));
      axios.get(API_URL_fiveDays).then((res) => setApiFiveDays(res));
    } else {
        return alert('Oops! An error occurred.\nPlease, reload or try again later.')
    }
  }, [location]);
};

export default CallApi;
