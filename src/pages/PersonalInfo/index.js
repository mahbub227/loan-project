import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import "./personalInfo.scss";
import { PERSONAL_INFO } from "../../localization/common.json";
import Input from "../../components/Input";
import { validatePhone, validateEmail } from "../../helpers/common";
import Select from "../../components/Select";
import { occupationType } from "../../constants/common";
import Button from "../../components/Button";
import { PersonalInfoContext } from "../../contexts/personalInfoContext";
import ContentTitle from "../../components/ContentTitle";

const PersonalInfo = () => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [validForm, setValidForm] = useState(false);

  const { setPersonalInfo } = useContext(PersonalInfoContext);

  let history = useHistory();

  useEffect(() => {
    if (
      name?.length >= 6 &&
      validateEmail(email) &&
      validatePhone(phone) &&
      occupation
    )
      setValidForm(true);
    else setValidForm(false);
  }, [name, phone, email, occupation]);

  const submit = () => {
    if (validForm) {
      setPersonalInfo({
        name,
        email,
        phone,
        occupation,
      });
      history.push("/business-info");
    }
  };

  return (
    <div className="personal-info">
      <Header />
      <form>
        <ContentTitle title={PERSONAL_INFO.TITLE} />
        <Input
          name={PERSONAL_INFO.NAME}
          type="input"
          value={name}
          pattern="[a-zA-Z ]{0,32}"
          callback={setName}
          error={name?.length < 6 ? PERSONAL_INFO.NAME_ERROR : ""}
          placeholder={PERSONAL_INFO.NAME_PH}
        />
        <Input
          name={PERSONAL_INFO.PHONE}
          value={phone}
          type="input"
          pattern="[0-9-+@]{0,16}"
          callback={setPhone}
          error={
            phone !== null && !validatePhone(phone)
              ? PERSONAL_INFO.PHONE_ERROR
              : ""
          }
          placeholder={PERSONAL_INFO.PHONE_PH}
        />
        <Input
          name={PERSONAL_INFO.EMAIL}
          value={email}
          type="email"
          pattern="[a-zA-Z0-9-+_@$.]{0,32}"
          callback={setEmail}
          error={
            email !== null && !validateEmail(email)
              ? PERSONAL_INFO.EMAIL_ERROR
              : ""
          }
          placeholder={PERSONAL_INFO.EMAIL_PH}
        />
        <Select
          name={PERSONAL_INFO.OCCUPATION}
          value={occupation}
          pattern="[a-zA-Z0-9-+_@$.]{0,32}"
          callback={setOccupation}
          error={occupation === "" ? PERSONAL_INFO.OCCUPATION_ERROR : ""}
          placeholder={PERSONAL_INFO.OCCUPATION_PH}
          options={occupationType}
        />
        <div className="button-div">
          <Button
            title={PERSONAL_INFO.PREV_BTN}
            width={"20%"}
            background="orange"
            callback={() => history.push("/")}
          />
          <Button
            disabled={!validForm}
            title={PERSONAL_INFO.NEXT_BTN}
            width={"calc( 80% - 15px )"}
            marginLeft="15px"
            callback={submit}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
