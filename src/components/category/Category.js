import "./category.scss";

const Category = ({ title, id, imageURL }) => (
  <div className="category">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="shop-now">SHOP NOW</span>
    </div>
  </div>
);

export default Category;
