import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/CartIcon";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.scss";

const Header = ({ currentUser }) => (
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
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
