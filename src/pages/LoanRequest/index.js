import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import "./loanRequest.scss";
import { LOAN_INFO } from "../../localization/common.json";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ContentTitle from "../../components/ContentTitle";
import { LoanInfoContext } from "../../contexts/loanInfoContext";

const LoanRequest = () => {
  const [amount, setAmount] = useState(null);
  const [period, setPeriod] = useState(null);
  const [validForm, setValidForm] = useState(false);

  const { setLoanInfo } = useContext(LoanInfoContext);

  let history = useHistory();

  useEffect(() => {
    if (amount && period) setValidForm(true);
    else setValidForm(false);
  }, [amount, period]);

  const submit = () => {
    if (validForm) {
      setLoanInfo({
        amount,
        period,
      });
      history.push("/result");
    }
  };

  return (
    <div className="business-info">
      <Header />
      <form>
        <ContentTitle title={LOAN_INFO.TITLE} />

        <Input
          name={LOAN_INFO.AMOUNT}
          type="text"
          value={amount}
          pattern="[0-9]{0,16}"
          callback={setAmount}
          error={amount !== null && !amount ? LOAN_INFO.AMOUNT_ERROR : ""}
          placeholder={LOAN_INFO.AMOUNT_PH}
          nameExt={`(${LOAN_INFO.CURRENCY})`}
        />

        <Input
          name={LOAN_INFO.PERIOD}
          type="text"
          value={period}
          pattern="[0-9]{0,2}"
          callback={setPeriod}
          error={period !== null && !period ? LOAN_INFO.PERIOD_ERROR : ""}
          placeholder={LOAN_INFO.PERIOD_PH}
          nameExt={`(${LOAN_INFO.YEAR})`}
        />

        <div className="button-div">
          <Button
            title={LOAN_INFO.PREV_BTN}
            width={"20%"}
            background="orange"
            callback={() => history.push("/")}
          />
          <Button
            disabled={!validForm}
            title={LOAN_INFO.NEXT_BTN}
            width={"calc( 80% - 15px )"}
            marginLeft="15px"
            callback={submit}
          />
        </div>
      </form>
    </div>
  );
};

export default LoanRequest;
