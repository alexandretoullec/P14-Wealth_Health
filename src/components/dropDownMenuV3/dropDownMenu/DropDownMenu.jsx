import React, { useState } from "react";
import DropDownItem from "./dropDownItem/DropDownItem";
import CogIcon from "../../../icons/cog.svg?react";
import ChevronIcon from "../../../icons/chevron.svg?react";
import "../navbar.scss";
import { CSSTransition } from "react-transition-group";

const DropDownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <div className="dropDown">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropDownItem>My profile</DropDownItem>
          <DropDownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="main"
          >
            Main
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "setting"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropDownMenu;
