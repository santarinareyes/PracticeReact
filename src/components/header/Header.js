import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="nav-options">
      <Link className="nav-option" to="/products">
        Products
      </Link>
      {currentUser ? (
        <div className="nav-option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="nav-option" to="/signin">
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
