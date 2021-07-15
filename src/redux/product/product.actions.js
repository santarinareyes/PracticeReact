import ProductActionTypes from './product.types'

export const updateCollections = collectionsMap => ({
  type: ProductActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
})
