import React, { useState, createContext } from "react";

export const BusinessInfoContext = createContext();

const BusinessInfoContextProvider = (props) => {
  const [businessInfo, setBusinessInfo] = useState(null);

  return (
    <BusinessInfoContext.Provider value={{ businessInfo, setBusinessInfo }}>
      {props.children}
    </BusinessInfoContext.Provider>
  );
};

export default BusinessInfoContextProvider;
