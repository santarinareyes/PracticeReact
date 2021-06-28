import { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

import "./signUp.scss";

const SignUp = () => {
  const newUserInitial = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [newUserInfo, setNewUserInfo] = useState(newUserInitial);
  const { displayName, email, password, confirmPassword } = newUserInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDoc(user, { displayName });
      setNewUserInfo(newUserInitial);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewUserInfo({ ...newUserInfo, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">Not yet registred?</h2>
      <span>Sign up now!</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Username"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton>Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
