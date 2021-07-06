import { createSelector } from 'reselect';

const selectProduct = (state) => state.product;

export const selectCollections = createSelector(
  [selectProduct],
  (product) => product.collections
);
