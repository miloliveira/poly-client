import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Home = () => {
  const [showLoginToggle, setShowLoginToggle] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {!isLoggedIn && (
        <>
          {showLoginToggle ? (
            <>
              <h4>Welcome Back</h4>
              <h4>Log in into your account</h4>
              <Login />
              <h2>Don't have an account yet? Register</h2>
              <button onClick={() => setShowLoginToggle(false)}>Here</button>
            </>
          ) : (
            <>
              <Signup setShowLoginToggle={setShowLoginToggle} />
              <button onClick={() => setShowLoginToggle(true)}>
                Login here
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
