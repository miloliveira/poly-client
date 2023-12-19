// Dependencies
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { auth, provider } from "../firebase-config";
import { signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleButton } from "react-google-button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const GoogleAuth = () => {
  // State and context variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);

  // Navigation function
  const navigate = useNavigate();
  // Firebase authentication state
  const [firebaseUser] = useAuthState(auth);
  // Function to initiate Google sign-in
  const signInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      setErrorMessage("Google authentication failed");
    }
  };
  // Effect to update local state based on Firebase authentication changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setEmail(currentUser.email);
      setUsername(currentUser.email);
      setName(currentUser.displayName);
      setPassword(currentUser.accessToken);
      setImageUrl(currentUser.photoURL);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // Function to handle Google authentication
  const handleGoogleAuth = async () => {
    try {
      const body = { email, username, name, password, imageUrl };
      // Send request to the server for Google authentication
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/google-auth`,
        body
      );
      // Store the authentication token
      await storeToken(response.data.authToken);

      // Authenticate the user
      await authenticateUser();

      // Clear error message and navigate to home page
      setErrorMessage("");
      navigate("/");
    } catch (error) {
      // Handle authentication error and set error message
      setErrorMessage(error.response.data.errorMessage);
    }
  };
  // Automatically trigger Google authentication when user details are available
  if (firebaseUser && email && name && username && password) {
    handleGoogleAuth();
  }

  return (
    <div>
      {!firebaseUser && (
        <GoogleButton onClick={signInWithGoogle} type="light" />
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default GoogleAuth;
