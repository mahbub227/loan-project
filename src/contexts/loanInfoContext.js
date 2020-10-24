import React, { useState, createContext } from "react";

export const LoanInfoContext = createContext();

const LoanInfoContextProvider = (props) => {
  const [loanInfo, setLoanInfo] = useState(null);

  return (
    <LoanInfoContext.Provider value={{ loanInfo, setLoanInfo }}>
      {props.children}
    </LoanInfoContext.Provider>
  );
};

export default LoanInfoContextProvider;
