import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import {
  googleProvider,
  auth,
  createUserProfileDoc,
} from '../../firebase/firebase.utils'
import {
  googleSignInSuccess,
  googleSignInFailure,
  emailSignInSuccess,
  emailSignInFailure,
} from './user.actions'

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDoc, user)
    const userSnapshot = yield userRef.get()
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    )
  } catch (err) {
    yield put(googleSignInFailure(err))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    const userRef = yield call(createUserProfileDoc, user)
    const userSnapshot = yield userRef.get()
    yield put(
      emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    )
  } catch (err) {
    yield put(emailSignInFailure(err))
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  )
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}