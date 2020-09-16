import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";
import "./SignUp.scss";

const SignUp = () => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = userData;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setUserData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [name]: value,
      };
    });
  };

  return (
    <div className="SignUp">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={userData.displayName}
          onChange={handleChange}
          label="Display Name"
          autoComplete="new-displayName"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          label="Email"
          autoComplete="new-email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          label="Password"
          autoComplete="new-password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          autoComplete="confirm-password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;