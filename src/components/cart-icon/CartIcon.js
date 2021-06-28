import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

import "./cartIcon.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingBagIcon className="shopping-bag-icon" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
