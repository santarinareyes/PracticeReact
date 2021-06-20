import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="nav-options">
      <Link className="nav-option" to="/signin">
        Sign in
      </Link>
      <Link className="nav-option" to="/products">
        Products
      </Link>
    </div>
  </div>
);

export default Header;
