import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
)

export const selectUserIsLoading = createSelector(
  [selectUser],
  user => user.isLoading
)

export const selectUserNewPassword = createSelector(
  [selectUser],
  user => user.newPassword
)
