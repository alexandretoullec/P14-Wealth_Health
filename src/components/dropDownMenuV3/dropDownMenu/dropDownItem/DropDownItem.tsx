import React from "react";
import "../../navbar.scss";

const DropDownItem = ({ children, leftIcon, rightIcon }) => {
  return (
    <a href="#" className="menu-item" onClick={()=> {goToMenu} && setActiveMenu(goToMenu)}>
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-button">{rightIcon}</span>
    </a>
  );
};

export default DropDownItem;
