import { useState } from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./signIn.scss";

const SignIn = () => {
  const signInInitial = {
    email: "",
    password: "",
  };

  const [accountInfo, setAccountInfo] = useState(signInInitial);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = accountInfo;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setAccountInfo(signInInitial);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="sign-in">
      <h1 className="title">Already have an account?</h1>
      <span>Sign in below</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={accountInfo.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={accountInfo.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton>Sign in</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
