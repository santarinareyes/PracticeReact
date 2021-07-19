import { all, call } from 'redux-saga/effects'
import { fetchCollectionsStart } from './product/product.sagas'

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)])
}
