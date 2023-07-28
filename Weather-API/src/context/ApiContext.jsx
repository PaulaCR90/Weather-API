import { createContext, useCallback, useState } from "react";

export const ApiContext = createContext({
  apiInfo: "",
  setApiInfo: "",
  //changeLatitude: () => null,
});

export const ApiContextProvider = ({ children }) => {
  const [apiInfo, setApiInfo] = useState({});

  //const changeLatitude = useCallback(() => {});

  return (
  <ApiContext.provider value={{selectValue, setSelectValue}}>
    {children}
  </ApiContext.provider>);
};