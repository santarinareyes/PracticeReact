import UserActionTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  newPassword: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        newPassword: false,
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
    case UserActionTypes.NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        newPassword: true,
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case UserActionTypes.NEW_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        newPassword: true,
      }
    default:
      return state
  }
}

export default userReducer
