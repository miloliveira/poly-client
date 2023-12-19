// Dependencies
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

// Style
import {
  LoginForm,
  AuthErrorMessage,
  ErrorMessageIcon,
} from "../styles/auth.styles";

const Login = () => {
  // State and context variables
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);

  // Navigation function
  const navigate = useNavigate();
  // Function to handle the login
  const handleLogin = async (e) => {
    try {
      // Prevent the default form submission
      e.preventDefault();
      // Extract login credentials from the form
      const body = { loginName, password };
      // Send login request to the server
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        body
      );
      // Store the authentication token
      await storeToken(response.data.authToken);
      // Authenticate the user
      await authenticateUser();
      // Redirect the user to the home page
      navigate("/");
    } catch (error) {
      // Handle login error and set error message
      setErrorMessage(error.response.data.errorMessage);
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
