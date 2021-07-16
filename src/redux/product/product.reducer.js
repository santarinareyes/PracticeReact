import ProductActionTypes from './product.types'

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      }
    case ProductActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      }
    default:
      return state
  }
}

export default productReducer
