import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/CustomButton";
import "./categoryItem.scss";

const CategoryItem = ({ item, addItemToCart }) => {
  const { imageURL, name, price } = item;

  return (
    <div className="category-item">
      <div className="image" style={{ backgroundImage: `url(${imageURL})` }} />
      <div className="product-info">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => {
          addItemToCart(item);
        }}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);
