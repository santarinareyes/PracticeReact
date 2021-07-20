import { UserActionTypes } from './user.types'

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
})

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
})

export const googleSignInSuccess = user => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
})

export const googleSignInFailure = user => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
})

export const emailSignInStart = () => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
})

export const emailSignInSuccess = user => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
})

export const emailSignInFailure = user => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
})
