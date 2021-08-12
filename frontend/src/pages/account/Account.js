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
import Spacer from '../../components/spacer/Spacer'
import { getUserProviderDoc } from '../../firebase/firebase.utils'

const buttonInitial = {
  changePassword: false,
  addProduct: false,
}

const newPasswordInitial = {
  password: '',
  confirmPassword: '',
}

const addProductInitial = {}

const AccountPage = ({
  currentUser,
  updatePassword,
  isLoading,
  forceFalse,
}) => {
  const [newPassword, setNewPassword] = useState(newPasswordInitial)
  const [buttonClicked, setButtonClicked] = useState(buttonInitial)
  const [productDetails, setProductDetails] = useState(addProductInitial)

  const handleButtonClicked = ({ target: { name } }) => {
    if (buttonClicked.changePassword) {
      setButtonClicked({
        ...buttonClicked,
        [name]: !buttonClicked[name],
        changePassword: false,
      })
      return
    }

    getUserProviderDoc()
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

  const offlineTimer = setTimeout(() => {
    forceFalse()
    clearTimeout(offlineTimer)
  }, 1000)

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
          <CustomButton name='changePassword' onClick={handleButtonClicked}>
            Change Password
          </CustomButton>
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
        <Spacer h='10' />
        <CustomButton name='addProduct' onClick={handleButtonClicked}>
          Add Product
        </CustomButton>
        {currentUser.isAdmin && (
          <S.FormContainer clicked={buttonClicked.addProduct}>
            <p>Admin</p>
          </S.FormContainer>
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
