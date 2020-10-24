import React, { useState, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const ClientIdContext = createContext();

const ClientIdContextProvider = (props) => {
  const [clientId, setClientId] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (!clientId) history.push("/");
  }, [clientId, history]);

  return (
    <ClientIdContext.Provider value={{ clientId, setClientId }}>
      {props.children}
    </ClientIdContext.Provider>
  );
};

export default ClientIdContextProvider;
