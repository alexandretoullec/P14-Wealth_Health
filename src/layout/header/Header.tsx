import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo_svg.svg" alt="logo" />
        <p>HRNET</p>
      </div>
      <div className="navigation">
        <Link to="/">Create employee</Link>
        <Link to="/">view curent employee</Link>
      </div>
    </div>
  );
};

export default Header;
