import React from "react";
import "./itemInfo.scss";

const ItemInfo = (props) => {
  return (
    <div className="item-info-block">
      <p className="title">{props.title}</p>
      <p className="value">{props.value}</p>
    </div>
  );
};

export default ItemInfo;
