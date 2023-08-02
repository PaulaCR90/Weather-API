import { createContext, useState } from "react";

export const ApiContext = createContext({
  apiInfo: '',
  setApiInfo: () => {},
});

export const ApiContextProvider = ({ children }) => {
  const [apiInfo, setApiInfo] = useState({});
  
  return (
  <ApiContext.Provider value={{apiInfo, setApiInfo}}>
    {children}
  </ApiContext.Provider>);
};