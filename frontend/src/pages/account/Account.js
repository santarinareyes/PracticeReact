import FormInput from '../../components/form-input/FormInput'
import * as S from './styles'
import CustomButton from '../../components/custom-button/CustomButton'
import { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectCurrentUser,
  selectUserIsLoading,
} from '../../redux/user/user.selectors'
import Spinner from '../../components/spinner/Spinner'
import {
  forceLoadingFalse,
  newPasswordStart,
} from '../../redux/user/user.actions'
import SignInOrSignUp from '../signInOrSignUp/SignInOrSignUp'

const initialValue = {
  password: '',
  confirmPassword: '',
}

const AccountPage = ({
  currentUser,
  updatePassword,
  isLoading,
  forceFalse,
}) => {
  const [newPassword, setNewPassword] = useState(initialValue)
  const [newPasswordClicked, setNewPasswordClicked] = useState(false)

  const handleNewPassword = () => {
    setNewPasswordClicked(!newPasswordClicked)
  }

  const handleChange = ({ target: { name, value } }) => {
    setNewPassword({ ...newPassword, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    if (password.length < 6) {
      alert('Password must containt atleast 6 characters')
      return
    }

    alert('Password successfully changed. Please sign in again.')
    updatePassword(password)
    setNewPassword(initialValue)
    setNewPasswordClicked(false)
  }

  const { password, confirmPassword } = newPassword

  const offlineTimer = setTimeout(() => {
    forceFalse()
    clearTimeout(offlineTimer)
  }, 1000)

  if (isLoading) return <Spinner />
  if (!isLoading && !currentUser) return <SignInOrSignUp />

  return (
    currentUser && (
      <S.AccountContainer>
        <FormInput
          onChange={handleChange}
          type='text'
          name='name'
          value={currentUser.displayName}
          label='Name'
          readOnly
        />
        <FormInput
          onChange={handleChange}
          type='email'
          name='email'
          value={currentUser.email}
          label='Email'
          readOnly
        />
        <S.NewPasswordContainer clicked={!newPasswordClicked}>
          <S.ButtonContainer>
            <CustomButton onClick={handleNewPassword}>Add Product</CustomButton>
            <CustomButton onClick={handleNewPassword}>
              Change Password
            </CustomButton>
          </S.ButtonContainer>
        </S.NewPasswordContainer>
        <S.NewPasswordContainer clicked={newPasswordClicked}>
          <form>
            <FormInput
              onChange={handleChange}
              type='password'
              name='password'
              value={password}
              label='New Password'
              required
            />
            <FormInput
              onChange={handleChange}
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              label='Confirm Password'
              required
            />
            <CustomButton onClick={handleSubmit}>Update Password</CustomButton>
          </form>
        </S.NewPasswordContainer>
        {currentUser.isAdmin && (
          <S.AddProductContainer>
            <p>Admin</p>
          </S.AddProductContainer>
        )}
      </S.AccountContainer>
    )
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isLoading: selectUserIsLoading,
})

const mapDispatchToProps = dispatch => ({
  updatePassword: password => dispatch(newPasswordStart(password)),
  forceFalse: () => dispatch(forceLoadingFalse()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
