import memoize from 'lodash.memoize'
import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
}

const selectProduct = state => state.product

export const selectCollections = createSelector(
  [selectProduct],
  product => product.collections
)

export const selectCollection = memoize(collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
)
