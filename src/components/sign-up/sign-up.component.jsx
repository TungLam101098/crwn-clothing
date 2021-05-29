import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-up.styles.scss';

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [dataUser, setDataUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dataUser.password !== dataUser.confirmPassword) {
      alert("passwords don't match");
      return;
    }
    if (dataUser.password.length < 6 || dataUser.confirmPassword.length < 6) {
      alert("passwords length > 6");
      return;
    }
    try {
      const displayName = dataUser.displayName;
      const { user } = await auth.createUserWithEmailAndPassword(
        dataUser.email,
        dataUser.password
      );
      createUserProfileDocument(user, { displayName });
      setDataUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (target) => {
    const {name, value} = target;
    setDataUser({...dataUser, [name]: value});
  }
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={dataUser.displayName}
          onChange={e =>handleChange(e.target)}
          label="DisplayName"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={dataUser.email}
          onChange={e =>handleChange(e.target)}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={dataUser.password}
          onChange={e =>handleChange(e.target)}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={dataUser.confirmPassword}
          onChange={e =>handleChange(e.target)}
          label="Confirm Password"
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
