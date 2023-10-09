import React, { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [firebaseUser] = useAuthState(auth);
  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logoutUser = async () => {
    removeToken();

    if (firebaseUser) {
      await auth.signOut();
    }
    authenticateUser();
  };

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

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

  useEffect(() => {
    authenticateUser();
  }, []);

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
