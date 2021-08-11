import UserActionTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  newPassword: false,
  isLoading: true,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        newPassword: false,
        isLoading: false,
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
    case UserActionTypes.NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        newPassword: true,
        isLoading: false,
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
        isLoading: false,
      }
    case UserActionTypes.FORCE_LOADING_FALSE:
      return {
        ...state,
        error: false,
        newPassword: false,
        isLoading: false,
      }
    default:
      return state
  }
}

export default userReducer
