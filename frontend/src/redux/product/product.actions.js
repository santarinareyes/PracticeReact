import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils'
import ProductActionTypes from './product.types'

export const fetchCollectionsStart = () => ({
  type: ProductActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ProductActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

export const fetchCollectionsFailure = errMessage => ({
  type: ProductActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errMessage,
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}

export const addProduct = payload => ({
  type: ProductActionTypes.ADD_PRODUCT_START,
  payload,
})

export const addProductSuccess = () => ({
  type: ProductActionTypes.ADD_PRODUCT_SUCCESS,
})

export const addProductFailure = payload => ({
  type: ProductActionTypes.ADD_PRODUCT_FAILURE,
  payload,
})

export const deleteProduct = payload => ({
  type: ProductActionTypes.DELETE_PRODUCT_START,
  payload,
})

export const deleteProductSuccess = () => ({
  type: ProductActionTypes.DELETE_PRODUCT_SUCCESS,
})

export const deleteProductFailure = () => ({
  type: ProductActionTypes.DELETE_PRODUCT_FAILURE,
})
