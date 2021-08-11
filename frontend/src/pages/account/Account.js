import FormInput from '../../components/form-input/FormInput'
import * as S from './styles'
import CustomButton from '../../components/custom-button/CustomButton'
import { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import Spinner from '../../components/spinner/Spinner'
import { newPasswordStart } from '../../redux/user/user.actions'

const initialValue = {
  password: '',
  confirmPassword: '',
}

const AccountPage = ({ currentUser, updatePassword }) => {
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

    updatePassword(password)
  }

  const { password, confirmPassword } = newPassword

  return !currentUser ? (
    <Spinner />
  ) : (
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
        <CustomButton onClick={handleNewPassword}>Change Password</CustomButton>
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
    </S.AccountContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  updatePassword: password => dispatch(newPasswordStart(password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
