import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import "./businessInfo.scss";
import { BUSINESS_INFO } from "../../localization/common.json";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { PersonalInfoContext } from "../../contexts/personalInfoContext";
import ContentTitle from "../../components/ContentTitle";
import { BusinessInfoContext } from "../../contexts/businessInfoContext";

const BusinessInfo = () => {
  const [businessUser, setBusinessUser] = useState(false);
  const [business, setBusiness] = useState(null);
  const [company, setCompany] = useState(null);
  const [experience, setExperience] = useState(null);
  const [employeeCount, setEmployeeCount] = useState(null);
  const [salary, setSalary] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const [validForm, setValidForm] = useState(false);

  const { setBusinessInfo } = useContext(BusinessInfoContext);

  let history = useHistory();

  const { personalInfo } = useContext(PersonalInfoContext);

  useEffect(() => {
    if (personalInfo?.occupation === "2") setBusinessUser(true);
  }, [personalInfo]);

  useEffect(() => {
    if (
      (business?.length >= 3 && employeeCount && revenue) ||
      (company?.length >= 3 && experience && salary)
    )
      setValidForm(true);
    else setValidForm(false);
  }, [business, company, experience, employeeCount, salary, revenue]);

  const submit = () => {
    if (validForm) {
      if (businessUser)
        setBusinessInfo({
          businessUser,
          business,
          employeeCount,
          revenue,
        });
      else
        setBusinessInfo({
          businessUser,
          company,
          experience,
          salary,
        });
      history.push("/loan-request");
    }
  };

  return (
    <div className="business-info">
      <Header />
      <form>
        <ContentTitle
          title={
            !businessUser
              ? BUSINESS_INFO.EMPLOYEE_TITLE
              : BUSINESS_INFO.BUSINESS_TITLE
          }
        />
        <Input
          name={!businessUser ? BUSINESS_INFO.COMPANY : BUSINESS_INFO.BUSINESS}
          type="input"
          value={!businessUser ? company : business}
          pattern="[a-zA-Z0-9 ]{0,32}"
          callback={!businessUser ? setCompany : setBusiness}
          error={
            !businessUser
              ? company?.length < 3
                ? BUSINESS_INFO.COMPANY_ERROR
                : ""
              : business?.length < 3
              ? BUSINESS_INFO.BUSINESS_ERROR
              : ""
          }
          placeholder={
            !businessUser ? BUSINESS_INFO.BUSINESS_PH : BUSINESS_INFO.COMPANY_PH
          }
        />

        <Input
          name={
            !businessUser ? BUSINESS_INFO.EXPERIENCE : BUSINESS_INFO.EMPLOYEE
          }
          type="text"
          value={!businessUser ? experience : employeeCount}
          pattern={!businessUser ? "[0-9]{0,2}" : "[0-9]{0,16}"}
          callback={!businessUser ? setExperience : setEmployeeCount}
          error={
            !businessUser
              ? experience !== null && !experience
                ? BUSINESS_INFO.EXPERIENCE_ERROR
                : ""
              : employeeCount !== null && !employeeCount
              ? BUSINESS_INFO.EMPLOYEE_ERROR
              : ""
          }
          placeholder={
            !businessUser
              ? BUSINESS_INFO.EXPERIENCE_PH
              : BUSINESS_INFO.EMPLOYEE_PH
          }
        />

        <Input
          name={!businessUser ? BUSINESS_INFO.SALARY : BUSINESS_INFO.REVENUE}
          type="text"
          value={!businessUser ? salary : revenue}
          pattern={!businessUser ? "[0-9]{0,6}" : "[0-9]{0,16}"}
          callback={!businessUser ? setSalary : setRevenue}
          error={
            !businessUser
              ? salary !== null && !salary
                ? BUSINESS_INFO.SALARY_ERROR
                : ""
              : revenue !== null && !revenue
              ? BUSINESS_INFO.REVENUE_ERROR
              : ""
          }
          placeholder={
            !businessUser
              ? BUSINESS_INFO.EXPERIENCE_PH
              : BUSINESS_INFO.EMPLOYEE_PH
          }
          nameExt={`(${BUSINESS_INFO.CURRENCY})`}
        />
        <div className="button-div">
          <Button
            title={BUSINESS_INFO.PREV_BTN}
            width={"20%"}
            background="orange"
            callback={() => history.push("/")}
          />
          <Button
            disabled={!validForm}
            title={BUSINESS_INFO.NEXT_BTN}
            width={"calc( 80% - 15px )"}
            marginLeft="15px"
            callback={submit}
          />
        </div>
      </form>
    </div>
  );
};

export default BusinessInfo;
