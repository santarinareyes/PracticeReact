import { collections } from '../../pages/products/products.data';

const INITIAL_STATE = {
  collections,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
