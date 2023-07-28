import { createContext, useCallback, useState } from "react";

export const SelectContext = createContext({
  selectValue: "",
  setSelectValue: "",
  //changeLatitude: () => null,
});

export const SelectContextProvider = ({ children }) => {
  const [selectValue, setSelectValue] = useState("");

  //const changeLatitude = useCallback(() => {});

  return (
  <SelectContext.provider value={{selectValue, setSelectValue}}>
    {children}
  </SelectContext.provider>);
};
