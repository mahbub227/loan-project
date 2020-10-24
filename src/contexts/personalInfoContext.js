import React, { useState, createContext } from "react";

export const PersonalInfoContext = createContext();

const PersonalInfoContextProvider = (props) => {
  const [personalInfo, setPersonalInfo] = useState(null);

  return (
    <PersonalInfoContext.Provider value={{ personalInfo, setPersonalInfo }}>
      {props.children}
    </PersonalInfoContext.Provider>
  );
};

export default PersonalInfoContextProvider;
