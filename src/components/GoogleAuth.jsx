import React, { useContext, useState, useEffect } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth.context";
const GoogleAuth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [firebaseUser] = useAuthState(auth);

  const signInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, provider);

      //const result = await getAuth().getUser();
      //console.log("this is the user", result);
      const result = localStorage.getItem("fbase_key");
      console.log(result);
    } catch (error) {
      setErrorMessage("Google authentication failed");
    }
  };

  if (firebaseUser && email && name && username && password) {
    handleGoogleAuth();
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setEmail(currentUser.email);
      setUsername(currentUser.email);
      setName(currentUser.displayName);
      setPassword(currentUser.accessToken);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGoogleAuth = async () => {
    try {
      const body = { email, username, name, password };

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

  return (
    <div>
      {!firebaseUser && (
        <button onClick={signInWithGoogle}>Sign in with google</button>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default GoogleAuth;
