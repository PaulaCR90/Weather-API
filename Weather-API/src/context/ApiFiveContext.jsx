import React, { useState, createContext, useCallback } from 'react'

export const ApiFiveContext = createContext({
  apiFiveDays: {},
  setApiFiveDays: () => {},
  //changeLatitude: () => null,,
})

export const ApiFiveDays = ({children}) => {
  const [apiFiveDays, setApiFiveDays] = useState({})

  return (
    <ApiFiveContext.Provider value={{apiFiveDays, setApiFiveDays}}>
      {children}
    </ApiFiveContext.Provider>
  )
}

export default ApiFiveDays;
