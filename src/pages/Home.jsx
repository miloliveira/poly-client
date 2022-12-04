import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Login from "../components/Login";
import Signup from "../components/Signup";
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
              <HomePageInnerDiv>
                <h5>Don't have an account yet? Register</h5>
                <button onClick={() => setShowLoginToggle(false)}>here</button>
              </HomePageInnerDiv>
            </HomePageShowLoginDiv>
          ) : (
            <HomePageShowSignupDiv>
              <Signup setShowLoginToggle={setShowLoginToggle} />
              <HomePageInnerDiv>
                <h5>Already have an account? Login</h5>
                <button onClick={() => setShowLoginToggle(true)}>here</button>
              </HomePageInnerDiv>
            </HomePageShowSignupDiv>
          )}
        </>
      )}
    </HomePage>
  );
};

export default Home;
