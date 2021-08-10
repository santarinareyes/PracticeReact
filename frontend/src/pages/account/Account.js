import FormInput from '../../components/form-input/FormInput'
import * as S from './styles'
import CustomButton from '../../components/custom-button/CustomButton'
import { useState } from 'react'

const AccountPage = () => {
  const [userDetails, setUserDetails] = useState({})
  const [newPasswordClicked, setNewPasswordClicked] = useState(false)

  const handleChange = () => {}

  const handleNewPassword = () => {
    setNewPasswordClicked(!newPasswordClicked)
  }

  return (
    <S.AccountContainer>
      <FormInput
        onChange={handleChange}
        type='text'
        name='name'
        value=''
        label='Name'
        required
      />
      <FormInput
        onChange={handleChange}
        type='email'
        name='email'
        value=''
        label='Email'
        disable
      />
      <S.NewPasswordContainer clicked={!newPasswordClicked}>
        <CustomButton onClick={handleNewPassword}>Change Password</CustomButton>
      </S.NewPasswordContainer>
      <S.NewPasswordContainer clicked={newPasswordClicked}>
        <FormInput
          onChange={handleChange}
          type='password'
          name='password'
          value=''
          label='New Password'
          required
        />
        <FormInput
          onChange={handleChange}
          type='password'
          name='confirm_password'
          value=''
          label='Confirm Password'
          required
        />
        <CustomButton>Update Password</CustomButton>
      </S.NewPasswordContainer>
    </S.AccountContainer>
  )
}

export default AccountPage
