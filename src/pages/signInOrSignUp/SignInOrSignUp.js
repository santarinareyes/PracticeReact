import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

import "./signInOrSignUp.scss";

const SignInOrSignUp = () => (
  <div className="signInOrSignUp">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInOrSignUp;
