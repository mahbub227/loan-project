import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { clientIdList } from "../../constants/common";
import { ClientIdContext } from "../../contexts/clientIdContext";
import { LP } from "../../localization/common.json";
import "./landingPage.scss";

const LandingPage = () => {
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  const { setClientId } = useContext(ClientIdContext);

  let history = useHistory();

  const submit = () => {
    if (clientIdList.includes(id)) {
      setClientId(id);
      setError("");
      history.push("/personal-info");
    } else {
      setError(LP.CLIENT_ID_ERROR);
    }
  };
  return (
    <div className="landing-page">
      <Header />
      <form>
        <Input
          name={LP.CLIENT_ID_INPUT_TITLE}
          type="input"
          value={id}
          pattern="[0-9]{0,16}"
          callback={setId}
          error={error}
          placeholder={LP.CLIENT_ID_PH}
        />
        <Button title={LP.START_BUTTON} callback={submit} />
      </form>
    </div>
  );
};

export default LandingPage;
