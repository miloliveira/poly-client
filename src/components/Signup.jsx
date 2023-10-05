import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import {
  SignupForm,
  ErrorMessageIcon,
  AuthErrorMessage,
} from "../styles/auth.styles";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const body = { username, email, password, name };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        body
      );
      await storeToken(response.data.authToken);
      await authenticateUser();
      navigate("/");
      setErrorMessage("");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  return (
    <SignupForm onSubmit={handleSubmit}>
      <h4>Welcome! Create your account and join the community</h4>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
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
