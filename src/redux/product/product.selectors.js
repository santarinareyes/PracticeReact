import memoize from 'lodash.memoize'
import { createSelector } from 'reselect'

const selectProduct = state => state.product

export const selectCollections = createSelector(
  [selectProduct],
  product => product.collections
)

export const selectCollection = memoize(collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )
)
