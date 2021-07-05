import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

import "./cartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
