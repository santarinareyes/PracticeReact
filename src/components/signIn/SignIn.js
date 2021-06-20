import { useState } from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import "./signIn.scss";

const SignIn = () => {
  const [accountInfo, setAccountInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAccountInfo({
      email: "",
      password: "",
    });
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
        <CustomButton>Sign in</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
