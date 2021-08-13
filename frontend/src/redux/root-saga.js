import { all, call } from 'redux-saga/effects'
import { cartSagas } from './cart/cart.sagas'
import { productSagas } from './product/product.sagas'
import { userSagas } from './user/user.sagas'

export default function* rootSaga() {
  yield all([call(userSagas), call(cartSagas), call(productSagas)])
}
