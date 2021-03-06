import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import {
  googleProvider,
  auth,
  createUserProfileDoc,
  getCurrentUser,
  firestore,
} from '../../firebase/firebase.utils'
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  newPasswordFailure,
  newPasswordSuccess,
  deleteUserSuccess,
  deleteUserFailure,
} from './user.actions'

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDoc, userAuth, additionalData)
    const userSnapshot = yield userRef.get()
    const user = yield auth.currentUser
    const isGoogleProvider = user.providerData[0].providerId === 'google.com'
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        isGoogleProvider,
        ...userSnapshot.data(),
      })
    )
  } catch (err) {
    yield put(signInFailure(err))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (err) {
    yield put(signInFailure(err))
  }
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (err) {
    yield put(signInFailure(err))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getSnapshotFromUserAuth(userAuth)
  } catch (err) {
    yield put(signInFailure(err))
  }
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (err) {
    yield put(signOutFailure(err))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield put(signUpSuccess({ user, additionalData: { displayName } }))
  } catch (err) {
    yield put(signUpFailure(err))
  }
}

export function* newPassword({ payload }) {
  try {
    const user = yield auth.currentUser
    user.updatePassword(payload)
    yield auth.signOut()
    yield put(newPasswordSuccess())
  } catch (err) {
    yield put(newPasswordFailure(err))
  }
}

export function* deleteUser() {
  const currentUser = yield auth.currentUser

  if (currentUser) {
    try {
      yield currentUser?.delete()
      yield put(deleteUserSuccess())
    } catch (err) {
      yield put(deleteUserFailure(err))
    }
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData)
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  )
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(
    [UserActionTypes.SIGN_OUT_START, UserActionTypes.DELETE_USER_SUCCESS],
    signOut
  )
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onNewPassword() {
  yield takeLatest(UserActionTypes.NEW_PASSWORD_START, newPassword)
}

export function* onDeleteUser() {
  yield takeLatest(UserActionTypes.DELETE_USER_START, deleteUser)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onNewPassword),
    call(onDeleteUser),
  ])
}
