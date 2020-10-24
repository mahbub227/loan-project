import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { BusinessInfoContext } from "../../contexts/businessInfoContext";
import { LoanInfoContext } from "../../contexts/loanInfoContext";
import {
  calcEMI,
  checkEligibilityBusiness,
  checkEligibility,
} from "../../helpers/common";
import "./result.scss";
import { RESULT } from "../../localization/common.json";
import ItemInfo from "../../components/ItemInfo";
import { loanRate } from "../../constants/common";
import Button from "../../components/Button";

const Result = () => {
  const [loanAmount, setLoanAmount] = useState(null);

  const { businessInfo } = useContext(BusinessInfoContext);
  const { loanInfo } = useContext(LoanInfoContext);

  let history = useHistory();

  useEffect(() => {
    if (businessInfo?.businessUser)
      setLoanAmount(
        checkEligibilityBusiness(businessInfo?.revenue, loanInfo?.amount)
      );
    else
      setLoanAmount(
        checkEligibility(
          businessInfo?.experience,
          businessInfo?.salary,
          loanInfo?.amount
        )
      );
  }, [businessInfo, loanInfo]);

  return (
    <div className="result-page">
      <Header />
      {loanAmount ? (
        <div className="approved">
          <p className="congrats">{RESULT.CONGRATS}</p>
          <p className="eligibility">{RESULT.ELIGIBLE}</p>
          <p className="loan-amount">
            ${loanAmount.toLocaleString("en-US", { maximumFractionDigits: 3 })}
          </p>
          <ItemInfo title={RESULT.LOAN_PERIOD} value={loanInfo?.period} />

          <ItemInfo
            title={`${RESULT.EMI} ${RESULT.CURRENCY}`}
            value={calcEMI(loanAmount, loanInfo?.period).toLocaleString(
              "en-US",
              { maximumFractionDigits: 3 }
            )}
          />
          <ItemInfo title={RESULT.INTEREST_RATE} value={loanRate} />
        </div>
      ) : (
        <div className="disapproved">
          <p className="sorry">{RESULT.SORRY}</p>
          <p className="eligibility">{RESULT.NOT_ELIGIBLE}</p>
        </div>
      )}
      <div className="button-div">
        <Button
          title={RESULT.PREV_BTN}
          width={loanAmount ? "20%" : "100%"}
          background="orange"
          callback={() => history.push("/")}
        />
        {loanAmount && (
          <Button
            title={RESULT.NEXT_BTN}
            width={"calc( 80% - 15px )"}
            marginLeft="15px"
            callback={() => history.push("/confirm")}
          />
        )}
      </div>
    </div>
  );
};

export default Result;
