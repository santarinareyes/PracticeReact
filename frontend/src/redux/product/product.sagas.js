import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  convertCollectionsSnapshotToMap,
  firestore,
  getCollectionRef,
} from '../../firebase/firebase.utils'
import {
  addProductFailure,
  addProductSuccess,
  deleteProductSuccess,
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './product.actions'
import ProductActionTypes from './product.types'

export function* updateCollectionInFirebase({ payload: { title, items } }) {
  try {
    const collectionRef = yield getCollectionRef(title)
    const collectionSnapshot = yield collectionRef.get()
    const itemsArray = yield collectionSnapshot.data().items

    const itemExist = yield itemsArray.find(
      itemInFirebase =>
        itemInFirebase.name.toLowerCase() === items.name.toLowerCase()
    )

    if (itemExist) {
      yield put(addProductFailure('Product with this name already exists'))
      return
    }

    yield itemsArray.push(items)
    yield collectionRef.update({ items: itemsArray })
    yield put(addProductSuccess())
  } catch (err) {
    console.log(err)
  }
}

export function* deleteItemFromFirebase({
  payload: { collection, productId },
}) {
  try {
    const collectionRef = yield getCollectionRef(collection)
    const collectionSnapshot = yield collectionRef.get()
    const itemsArray = yield collectionSnapshot.data().items

    const newArray = yield itemsArray.filter(
      itemInFirebase => itemInFirebase.id.toString() !== productId.toString()
    )

    yield collectionRef.update({ items: newArray })
    yield put(deleteProductSuccess())
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
    [
      ProductActionTypes.FETCH_COLLECTIONS_START,
      ProductActionTypes.ADD_PRODUCT_SUCCESS,
      ProductActionTypes.DELETE_PRODUCT_SUCCESS,
    ],
    fetchCollectionsAsync
  )
}

export function* onAddProduct() {
  yield takeLatest(
    ProductActionTypes.ADD_PRODUCT_START,
    updateCollectionInFirebase
  )
}

export function* onDeleteProduct() {
  yield takeLatest(
    ProductActionTypes.DELETE_PRODUCT_START,
    deleteItemFromFirebase
  )
}

export function* productSagas() {
  yield all([
    call(fetchCollectionsStart),
    call(onAddProduct),
    call(onDeleteProduct),
  ])
}
