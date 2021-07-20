import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils'
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './product.actions'
import ProductActionTypes from './product.types'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ProductActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}

export function* productSagas() {
  yield all([call(fetchCollectionsSuccess)])
}
