import "./cartItem.scss";

const CartItem = ({ item: { imageURL, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageURL} alt={name} />
    <div className="cart-item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price} SEK
      </span>
    </div>
  </div>
);

export default CartItem;
