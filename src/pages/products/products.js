import { Component } from "react";

import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { collections } from "./products.data";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherProps }) => (
          <CategoryPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Products;
