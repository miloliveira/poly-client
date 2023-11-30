import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Login from "../components/Login";
import Signup from "../components/Signup";
import GoogleAuth from "../components/GoogleAuth";
import {
  HomePage,
  HomePageShowLoginDiv,
  HomePageInnerDiv,
  HomePageShowSignupDiv,
} from "../styles/home.styles";
const Home = () => {
  const [showLoginToggle, setShowLoginToggle] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <HomePage>
      {!isLoggedIn && (
        <>
          {showLoginToggle ? (
            <HomePageShowLoginDiv>
              <Login />
              <GoogleAuth />
              <HomePageInnerDiv>
                <p>Don't have an account yet? </p>
                <button onClick={() => setShowLoginToggle(false)}>
                  Register here
                </button>
              </HomePageInnerDiv>
            </HomePageShowLoginDiv>
          ) : (
            <HomePageShowSignupDiv>
              <Signup />
              <GoogleAuth />
              <HomePageInnerDiv>
                <p>Already have an account?</p>
                <button onClick={() => setShowLoginToggle(true)}>
                  Login here
                </button>
              </HomePageInnerDiv>
            </HomePageShowSignupDiv>
          )}
        </>
      )}
    </HomePage>
  );
};

export default Home;
