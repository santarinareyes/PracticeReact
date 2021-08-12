import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/signUp/SignUp'
import * as S from './styles';
//import './signInOrSignUp.scss'

const SignInOrSignUp = () => (
  <S.signInOrSignUp>
    <SignIn />
    <SignUp />
    </S.signInOrSignUp>
)

export default SignInOrSignUp
