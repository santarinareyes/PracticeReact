import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  convertCollectionsSnapshotToMap,
  firestore,
  getCollectionRef,
} from '../../firebase/firebase.utils'
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './product.actions'
import ProductActionTypes from './product.types'

export function* updateCollectionInFirebase({ payload: { title, items } }) {
  try {
    const collectionRef = yield getCollectionRef(title)
    const collectionSnapshot = yield collectionRef.get()
    const itemsArray = yield collectionSnapshot.data().items
    yield itemsArray.push(items)
    yield collectionRef.update({ itemsArray })
  } catch (err) {
    console.log(err)
  }
}

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

export function* onAddProduct() {
  yield takeLatest(ProductActionTypes.ADD_PRODUCT, updateCollectionInFirebase)
}

export function* productSagas() {
  yield all([call(fetchCollectionsStart), call(onAddProduct)])
}
