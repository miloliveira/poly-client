import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import {
  LoginForm,
  AuthErrorMessage,
  ErrorMessageIcon,
} from "../styles/auth.styles";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const body = await { username, password };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        body
      );
      await storeToken(response.data.authToken);
      await authenticateUser();
      await navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
      console.log(errorMessage);
    }
  };

  return (
    <LoginForm onSubmit={handleLogin}>
      <h5>Welcome back</h5>
      <label>Username</label>
      <input
        type="text"
        value={username}
        placeholder="ex: john123"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="text"
        value={password}
        placeholder="your password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button type="submit">Login</button>
      {errorMessage && (
        <AuthErrorMessage>
          <ErrorMessageIcon />
          <p>{errorMessage}</p>
        </AuthErrorMessage>
      )}
    </LoginForm>
  );
};

export default Login;
