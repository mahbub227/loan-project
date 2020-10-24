import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <div
      className={`custom-button ${props.disabled && "disabled"}`}
      onClick={() => props.callback()}
      style={{
        width: props.width,
        background: props.background,
        marginLeft: props.marginLeft,
      }}
    >
      {props.title}
    </div>
  );
};

export default Button;
