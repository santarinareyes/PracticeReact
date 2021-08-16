import UserActionTypes from './user.types'

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
})

export const emailSignInStart = userInfo => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: userInfo,
})

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
})

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
})

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
})

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
})

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
})

export const signOutFailure = err => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: err,
})

export const signUpStart = userInfo => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userInfo,
})

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
})

export const signUpFailure = err => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: err,
})

export const newPasswordStart = newPassword => ({
  type: UserActionTypes.NEW_PASSWORD_START,
  payload: newPassword,
})

export const newPasswordFailure = err => ({
  type: UserActionTypes.NEW_PASSWORD_FAILURE,
  payload: err,
})

export const newPasswordSuccess = () => ({
  type: UserActionTypes.NEW_PASSWORD_SUCCESS,
})

export const forceLoadingFalse = () => ({
  type: UserActionTypes.FORCE_LOADING_FALSE,
})

export const deleteUserStart = payload => ({
  type: UserActionTypes.DELETE_USER_START,
  payload,
})

export const deleteUserSuccess = () => ({
  type: UserActionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailure = err => ({
  type: UserActionTypes.DELETE_USER_FAILURE,
  payload: err,
})
