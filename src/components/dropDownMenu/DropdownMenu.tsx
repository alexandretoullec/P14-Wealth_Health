import React, { useState } from "react";
import "./dropdowmenu.scss";

import user from "../../img/user.png";
import edit from "../../img/edit.png";
import inbox from "../../img/inbox.png";
import setting from "../../img/settings.png";
import help from "../../img/help.png";
import logout from "../../img/logout.png";

import "../../icons/arrow.svg";

const DropdownItem = (props) => {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  );
};

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="menu-container">
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={user}></img>
      </div>
      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <h3>
          The Kiet
          <br />
          <span>Website Designer</span>
          <ul>
            <DropdownItem img={user} text={"my profile"} />
            <DropdownItem img={edit} text={"edit"} />
            <DropdownItem img={setting} text={"my settings"} />
          </ul>
        </h3>
      </div>
    </div>
  );
};

export default DropdownMenu;
