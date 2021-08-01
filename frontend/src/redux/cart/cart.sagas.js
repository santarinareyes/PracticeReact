import { all, call, takeLatest, put } from 'redux-saga/effects'
import UserActionTypes from '../user/user.types'
import { clearCart } from './cart.actions'
import { CartActionTypes } from './cart.types'
import { getUserCartRef } from '../../firebase/firebase.utils'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSucces() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* updateCartInFirebase() {
  yield console.log('updateCartInFirebase')
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
    ],
    updateCartInFirebase
  )
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id)
  const cartSnapshot = yield cartRef.get()
  console.log('cartSnapshot', cartSnapshot)
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase)
}

export function* cartSagas() {
  yield all([call(onSignOutSucces), call(onCartChange), call(onSignInSuccess)])
}
