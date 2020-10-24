import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PersonalInfo from "./pages/PersonalInfo";
import ClientIdContextProvider from "./contexts/clientIdContext";
import BusinessInfo from "./pages/BusinessInfo";
import PersonalInfoContextProvider from "./contexts/personalInfoContext";
import BusinessInfoContextProvider from "./contexts/businessInfoContext";
import LoanInfoContextProvider from "./contexts/loanInfoContext";
import LoanRequest from "./pages/LoanRequest";
import Result from "./pages/Result";
import Confirm from "./pages/Confirm";

const App = () => {
  return (
    <Router>
      <Switch>
        <ClientIdContextProvider>
          <PersonalInfoContextProvider>
            <BusinessInfoContextProvider>
              <LoanInfoContextProvider>
                <Route exact path="/" component={LandingPage} />
                <Route path="/personal-info" component={PersonalInfo} />
                <Route path="/business-info" component={BusinessInfo} />
                <Route path="/loan-request" component={LoanRequest} />
                <Route path="/result" component={Result} />
                <Route path="/confirm" component={Confirm} />
              </LoanInfoContextProvider>
            </BusinessInfoContextProvider>
          </PersonalInfoContextProvider>
        </ClientIdContextProvider>
      </Switch>
    </Router>
  );
};

export default App;
