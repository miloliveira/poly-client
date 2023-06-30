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
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const body = await { loginName, password };

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
      <h3>Welcome back</h3>
      <label htmlFor="loginName">Username or email address</label>
      <input
        id="loginName"
        type="text"
        value={loginName}
        onChange={(e) => {
          setLoginName(e.target.value);
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
