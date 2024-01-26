import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <div className="menu">
      <div className="logo">
        <img className="img" src={logo} alt="logo" />
        <p>HRNET</p>
      </div>
      <div className="navigation">
        <Link to="/">Create employee</Link>
        <Link to="/current">view curent employee</Link>
      </div>
    </div>
  );
};

export default Header;
