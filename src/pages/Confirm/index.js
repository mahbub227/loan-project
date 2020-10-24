import React from "react";
import "./confirm.scss";
import { CONFIRM } from "../../localization/common.json";

const Confirm = () => {
  return (
    <div className="confirm-page">
      <p className="request">{CONFIRM.REQUEST}</p>
      <p className="check">{CONFIRM.CHECK_EMAIL}</p>
    </div>
  );
};

export default Confirm;
