import "./navItem.scss";
import { useState } from "react";

const NavItem = ({ icon, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>

      {open && children}
    </li>
  );
};

export default NavItem;
