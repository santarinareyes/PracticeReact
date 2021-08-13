import ProductActionTypes from './product.types'

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: undefined,
      }
    case ProductActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
        errorMessage: undefined,
      }
    case ProductActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    case ProductActionTypes.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default productReducer
