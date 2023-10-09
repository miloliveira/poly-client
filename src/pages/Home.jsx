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
              <GoogleAuth/>
              <HomePageInnerDiv>
                <h5>Don't have an account yet? </h5>
                <button onClick={() => setShowLoginToggle(false)}>
                  Register here
                </button>
              </HomePageInnerDiv>
            </HomePageShowLoginDiv>
          ) : (
            <HomePageShowSignupDiv>
              <Signup />
              <GoogleAuth/>
              <HomePageInnerDiv>
                <h5>Already have an account?</h5>
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
