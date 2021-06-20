import CategoryItem from "../category-item/CategoryItem";
import "./categoryPreview.scss";

const CategoryPreview = ({ title, items }) => (
  <div>
    <h1>{title.toUpperCase()}</h1>
    <div>
      <div>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <CategoryItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  </div>
);

export default CategoryPreview;
