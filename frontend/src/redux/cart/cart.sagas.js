import { all, call, takeLatest, put, select } from 'redux-saga/effects'
import UserActionTypes from '../user/user.types'
import {
  clearCart,
  setCartFromFirebase,
  stripePaymentSuccess,
} from './cart.actions'
import { CartActionTypes } from './cart.types'
import { firestore, getUserCartRef } from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../user/user.selectors'
import { selectCartItems } from './cart.selectors'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSucces() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* addPaidCartToFirebase() {
  const currentUser = yield select(selectCurrentUser)
  const id = currentUser ? currentUser.id : 'guest'

  try {
    const paidCartDocRef = firestore.collection('paidCarts').doc()
    const cartItems = yield select(selectCartItems)
    yield paidCartDocRef.set({
      userId: id,
      cartItems,
      payment: 'stripe',
    })
    yield put(clearCart())
    yield put(stripePaymentSuccess())
  } catch (err) {
    console.log(err)
  }
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser)

  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id)
      const cartItems = yield select(selectCartItems)
      yield cartRef.update({ cartItems })
    } catch (err) {
      console.log(err)
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id)
  const cartSnapshot = yield cartRef.get()
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems))
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
      CartActionTypes.STRIPE_PAYMENT_SUCCESS,
    ],
    updateCartInFirebase
  )
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase)
}

export function* onPaymentSuccess() {
  yield takeLatest(CartActionTypes.STRIPE_PAYMENT_START, addPaidCartToFirebase)
}

export function* cartSagas() {
  yield all([
    call(onSignOutSucces),
    call(onCartChange),
    call(onSignInSuccess),
    call(onPaymentSuccess),
  ])
}
