import React, { useState } from "react";
import "./dropdowmenu.scss";

import "../../icons/arrow.svg";

const DropdownMenu = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="inputCard">
      <label className="label" htmlFor="">
        Department
      </label>
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <input id="" type="text" placeholder="" />
      </div>
      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <ul>
          {data.map((item) => (
            <li key={item.abbreviation}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
