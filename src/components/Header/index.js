import React from "react";
import { logo } from "../../static/global-assets";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} height="20px" alt="logo" />
      <span>Sample Grant Platform</span>
    </div>
  );
};

export default Header;
