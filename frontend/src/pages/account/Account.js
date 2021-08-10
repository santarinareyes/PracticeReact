import FormInput from '../../components/form-input/FormInput'
import * as S from './styles'
import CustomButton from '../../components/custom-button/CustomButton'
import { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import Spinner from '../../components/spinner/Spinner'
import { updateUserProfileDoc } from '../../firebase/firebase.utils'

const initialValue = {
  newPassword: '',
  confNewPassword: '',
}

const AccountPage = ({ currentUser }) => {
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
    updateUserProfileDoc(currentUser)
  }

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
        <form onSubmit={handleSubmit}>
          <FormInput
            onChange={handleChange}
            type='password'
            name='newPassword'
            value={newPassword.newPassword}
            label='New Password'
            required
          />
          <FormInput
            onChange={handleChange}
            type='password'
            name='confNewPassword'
            value={newPassword.confNewPassword}
            label='Confirm Password'
            required
          />
          <CustomButton>Update Password</CustomButton>
        </form>
      </S.NewPasswordContainer>
    </S.AccountContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(AccountPage)
