import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import { auth, provider } from "../firebase-config";
import { signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleButton } from "react-google-button";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const GoogleAuth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [firebaseUser] = useAuthState(auth);

  const signInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      setErrorMessage("Google authentication failed");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
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

  const handleGoogleAuth = async () => {
    try {
      const body = { email, username, name, password, imageUrl };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/google-auth`,
        body
      );
      await storeToken(response.data.authToken);
      await authenticateUser();
      setErrorMessage("");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

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
