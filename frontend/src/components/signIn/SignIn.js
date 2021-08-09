import { useState } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'
import { connect } from 'react-redux'
import './signIn.scss'

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const signInInitial = {
    email: '',
    password: '',
  }

  const [accountInfo, setAccountInfo] = useState(signInInitial)

  const handleChange = ({ target }) => {
    const { name, value } = target
    setAccountInfo({ ...accountInfo, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()g
    const { email, password } = accountInfo
    emailSignInStart(email, password)
  }

  return (
    <div className='sign-in'>
      <h1 className='title'>Already have an account?</h1>
      <span>Sign in below</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={accountInfo.email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={accountInfo.password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton>Sign in</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
