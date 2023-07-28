import React, { createContext, useCallback, useState } from "react";

export const CoordsContext = createContext({
  latitude: "",
  longitude: "",
  changeCoords: () => null,
});

export const CoordsContextProvider = ({ children }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const changeCoords = useCallback(() => {
    console.log('hola');
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    });
  });
  console.log(latitude);
  {latitude ? console.log(latitude) : alert(`¡Ubicación desactivada!\nActívala y recarga para continuar.`)}
  return (
  <CoordsContext.Provider value={{latitude, longitude, changeCoords}}>
    {children}
  </CoordsContext.Provider>);
};
