// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

// Create a context for authentication-related data
const AuthContext = React.createContext();

// Wrapper component to provide authentication context to its children
function AuthProviderWrapper(props) {
  // State to manage user authentication status and related information
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [firebaseUser] = useAuthState(auth);

  // Function to store authentication token in local storage
  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  // Function to remove authentication token from local storage
  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  // Function to logout user, remove token, and authenticate user
  const logoutUser = async () => {
    removeToken();
    if (firebaseUser) {
      await auth.signOut();
    }
    authenticateUser();
  };

  // Function to get authentication token from local storage
  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  // Function to authenticate user based on stored token
  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/auth/verify`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((response) => {
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(response.data);
        })
        .catch((err) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };
  // Effect hook to authenticate user on component mount
  useEffect(() => {
    authenticateUser();
  }, []);
  // Provide the authentication context and its values to children components
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logoutUser,
        getToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
