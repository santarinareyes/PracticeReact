import { useState } from "react";

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
      <div>Already have an account?</div>
      <span>Sign in below</span>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={accountInfo.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="password"
          type="password"
          value={accountInfo.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default SignIn;
