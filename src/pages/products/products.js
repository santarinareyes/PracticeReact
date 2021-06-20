import { Component } from "react";
import { collections } from "./products.data";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections,
    };
  }
  render() {
    return (
      <div>
        <p>Test</p>
      </div>
    );
  }
}

export default Products;
