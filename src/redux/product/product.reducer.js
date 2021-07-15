import ProductActionTypes from './product.types'

const INITIAL_STATE = {
  collections: null,
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      }
    default:
      return state
  }
}

export default productReducer
