import CustomButton from "../custom-button/CustomButton";
import "./cartDropdown.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
