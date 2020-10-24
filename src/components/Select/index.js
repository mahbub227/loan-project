import React from "react";
import "./select.scss";

const Select = (props) => {
  const options = props.options?.map((data) => (
    <option value={data.value} key={data.value}>
      {data.name}
    </option>
  ));

  return (
    <div className={`custom-select ${props.error && "error"}`}>
      <label>{props.name}</label>
      <select
        value={props.value || ""}
        className={`${!props.value && "unset"}`}
        onChange={(e) => props.callback(e.target.value)}
        onFocus={(e) => props.callback(e.target.value)}
      >
        <option value="" readOnly={true} hidden={true} defaultValue>
          {props.placeholder}
        </option>
        {options}
      </select>
      <p>{props.error}</p>
    </div>
  );
};

export default Select;
