import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import {
  googleProvider,
  auth,
  createUserProfileDoc,
} from '../../firebase/firebase.utils'
import { googleSignInSuccess, googleSignInFailure } from './user.actions'

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDoc, user)
    const userSnapshot = yield userRef.get()
    yield put(
      googleSignInSuccess({ id: userSnapshot.uid, ...userSnapshot.data() })
    )
  } catch (err) {
    yield put(googleSignInFailure(err))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)])
}
