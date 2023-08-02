import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { ApiContext } from "../../context/ApiContext";
import { ApiFiveContext } from "../../context/ApiFiveContext";

const CallApi = () => {
  // Declarar contextos y estados necesarios.
  const { setApiInfo } = useContext(ApiContext);
  const { setApiFiveDays } = useContext(ApiFiveContext);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      const API_KEY = "67038b5b098f4a7d4de263428fb9af54";
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      const API_URL_fiveDays = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      // Realizar la llamada a la API.
      axios.get(API_URL).then((res) => setApiInfo(res.data));
      axios.get(API_URL_fiveDays).then((res) => setApiFiveDays(res.data));
    }
    // Obtener ubicación del usuario.
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    });
  }, [latitude, longitude]);
};

export default CallApi;
