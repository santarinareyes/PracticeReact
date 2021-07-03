import CategoryItem from "../category-item/CategoryItem";
import "./categoryPreview.scss";

const CategoryPreview = ({ title, items }) => (
  <div className="category-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
