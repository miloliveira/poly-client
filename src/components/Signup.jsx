// Dependencies
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

// Style
import {
  SignupForm,
  ErrorMessageIcon,
  AuthErrorMessage,
} from "../styles/auth.styles";

const Signup = () => {
  // State variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  // Authentication context and navigation hook
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Form submission handling
  const handleSubmit = async (e) => {
    try {
      // Prevent the default form submission
      e.preventDefault();

      const body = { username, email, password, name };

      // Send signup request to the server
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        body
      );
      // Store the authentication token, authenticate user, clear error, and navigate to home
      await storeToken(response.data.authToken);
      await authenticateUser();
      setErrorMessage("");
      navigate("/");
    } catch (error) {
      // Handle signup error and update error message
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
