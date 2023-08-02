import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { citiesCoords } from "../components/Select/InfoSelect";
import { ApiFiveContext } from "./ApiFiveContext";
import { ApiContext } from "./ApiContext";

export const SelectContext = createContext({
  selectValue: "",
  setSelectValue: () => null,
  callSelectValue: () => null,
});

export const SelectContextProvider = ({ children }) => {
  const [selectValue, setSelectValue] = useState("");
  const { setApiInfo } = useContext(ApiContext);
  const { setApiFiveDays } = useContext(ApiFiveContext);

  const callSelectValue = useCallback(() => {
    const { latitude, longitude } = citiesCoords[selectValue];
    useEffect(() => {
      const API_KEY = "67038b5b098f4a7d4de263428fb9af54";
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      const API_URL_fiveDays = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      // Realizar la llamada a la API.
      axios.get(API_URL).then((res) => setApiInfo(res.data));
      axios.get(API_URL_fiveDays).then((res) => setApiFiveDays(res.data));
    });
  });
  return (
    <SelectContext.Provider value={{ selectValue, setSelectValue }}>
      {children}
    </SelectContext.Provider>
  );
};
