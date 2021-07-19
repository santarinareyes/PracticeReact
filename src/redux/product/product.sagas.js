import { takeEvery } from 'redux-saga/effects'
import ProductActionTypes from './product.types'

export function* fetchCollectionsAsync() {
  yield console.log('Yielded')
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ProductActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}
