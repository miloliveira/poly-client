import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignupForm,
  ErrorMessageIcon,
  AuthErrorMessage,
} from "../styles/auth.styles";
const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { setShowLoginToggle } = props;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const body = await { username, password, name };

      await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, body);

      await setShowLoginToggle(true);
      await setErrorMessage("");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  return (
    <SignupForm onSubmit={handleSubmit}>
      <h4>Welcome! Create your account and join the community</h4>
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Signup</button>
      {errorMessage && (
        <AuthErrorMessage>
          <ErrorMessageIcon />
          <p>{errorMessage}</p>
        </AuthErrorMessage>
      )}
    </SignupForm>
  );
};

export default Signup;
