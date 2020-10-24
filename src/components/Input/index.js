import React from "react";
import "./input.scss";

const Input = (props) => {
  const updateValue = (e) => {
    if (!e.target.validity.patternMismatch) {
      props.callback(e.target.value.replace(/\s\s+/g, " "));
    }
  };

  return (
    <div className={`custom-input ${props.error && "error"}`}>
      <label>
        {props.name}
        {props.nameExt && <span> {props.nameExt}</span>}
      </label>
      <input
        type={props.type}
        pattern={props.pattern}
        value={props.value || ""}
        onChange={(e) => updateValue(e)}
        placeholder={props.placeholder}
      />
      <p>{props.error}</p>
    </div>
  );
};

export default Input;
