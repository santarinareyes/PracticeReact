import Category from "../category/Category";

import "./categories.scss";

const Categories = () => {
  const shopCategories = [
    {
      id: 1,
      title: "One",
      imageURL:
        "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
    },
    {
      id: 2,
      title: "Two",
      imageURL:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    },
    {
      id: 3,
      title: "Three",
      imageURL:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 4,
      title: "Four",
      imageURL:
        "https://images.unsplash.com/photo-1591375372156-542495912da9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 5,
      title: "Five",
      imageURL:
        "https://images.unsplash.com/photo-1587467512961-120760940315?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
  ];

  return (
    <div className="categories">
      {shopCategories.map(({ title, id, imageURL }) => (
        <Category key={id} title={title} imageURL={imageURL} />
      ))}
    </div>
  );
};

export default Categories;
