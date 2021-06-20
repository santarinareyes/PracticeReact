import "./categoryPreview.scss";

const CategoryPreview = ({ title, items }) => (
  <div>
    <h1>{title.toUpperCase()}</h1>
    <div>
      <div>
        {items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  </div>
);

export default CategoryPreview;
