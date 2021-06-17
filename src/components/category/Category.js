import "./category.scss";

const Category = ({ title, imageURL, size }) => (
  <div
    className={`category ${size}`}
    style={{ backgroundImage: `url(${imageURL})` }}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="shop-now">SHOP NOW</span>
    </div>
  </div>
);

export default Category;
