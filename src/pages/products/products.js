import { Component } from "react";
import { collections } from "./products.data";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections,
    };
  }
}

export default Products;
