import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/signUp/SignUp'
import './signInOrSignUp.scss'
import { SignInOrSignUpContainer } from './styles'

const SignInOrSignUp = () => (
  <SignInOrSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInOrSignUpContainer>
)

export default SignInOrSignUp
