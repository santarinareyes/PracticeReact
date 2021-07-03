import CustomButton from "../custom-button/CustomButton";
import "./categoryItem.scss";

const CategoryItem = ({ id, name, price, imageURL }) => (
  <div className="category-item">
    <div className="image" style={{ backgroundImage: `url(${imageURL})` }} />
    <div className="product-info">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
);

export default CategoryItem;
