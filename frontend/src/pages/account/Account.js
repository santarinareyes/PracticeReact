import FormInput from '../../components/form-input/FormInput'
import * as S from './styles'
import CustomButton from '../../components/custom-button/CustomButton'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectCurrentUser,
  selectUserIsLoading,
} from '../../redux/user/user.selectors'
import Spinner from '../../components/spinner/Spinner'
import {
  deleteUserStart,
  forceLoadingFalse,
  newPasswordStart,
} from '../../redux/user/user.actions'
import SignInOrSignUp from '../signInOrSignUp/SignInOrSignUp'
import Spacer from '../../components/spacer/Spacer'
import Admin from '../../components/admin/Admin'
import DeleteAccount from '../../components/account-manager/delete-account/DeleteAccount'

const buttonInitial = {
  changePassword: false,
  productManager: false,
}

const newPasswordInitial = {
  password: '',
  confirmPassword: '',
}

const AccountPage = ({
  currentUser,
  updatePassword,
  isLoading,
  forceFalse,
}) => {
  const [newPassword, setNewPassword] = useState(newPasswordInitial)
  const [buttonClicked, setButtonClicked] = useState(buttonInitial)

  useEffect(() => {
    const offlineTimer = setTimeout(() => {
      forceFalse()
      clearTimeout(offlineTimer)
    }, 1000)
  }, [forceFalse])

  const handleButtonClicked = ({ target: { name } }) => {
    if (currentUser.isGoogleProvider && name === 'changePassword') {
      alert(
        'You are logged in with Google authentication and can only change your password through Google.'
      )
      return
    }

    if (buttonClicked.changePassword) {
      setButtonClicked({
        ...buttonClicked,
        [name]: !buttonClicked[name],
        changePassword: false,
      })
      return
    }

    setButtonClicked({
      ...buttonClicked,
      [name]: !buttonClicked[name],
    })
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
    setNewPassword(newPasswordInitial)
    setButtonClicked(buttonInitial)
  }

  const { password, confirmPassword } = newPassword

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
        <S.FormContainer clicked={!buttonClicked.changePassword}>
          <S.ButtonContainer>
            <S.ButtonsInRow>
              <CustomButton name='changePassword' onClick={handleButtonClicked}>
                Change Password
              </CustomButton>
              <DeleteAccount currentUser={currentUser} />
            </S.ButtonsInRow>
          </S.ButtonContainer>
        </S.FormContainer>
        <S.FormContainer clicked={buttonClicked.changePassword}>
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
        </S.FormContainer>
        {currentUser.isAdmin && (
          <>
            <Spacer h='10' />
            <S.ButtonContainer>
              <CustomButton name='productManager' onClick={handleButtonClicked}>
                Product Manager
              </CustomButton>
            </S.ButtonContainer>
            <S.FormContainer clicked={buttonClicked.productManager}>
              <Admin />
            </S.FormContainer>
          </>
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
  deleteUser: userId => dispatch(deleteUserStart(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
