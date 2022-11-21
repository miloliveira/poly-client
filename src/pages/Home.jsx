import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import Teste from "../components/Teste";
import Login from "../components/Login";
import Signup from "../components/Signup";
const Home = () => {
  const [showLoginToggle, setShowLoginToggle] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);
  /*   const isBoolean = useSelector((state) => state.isBoolean.value);
  console.log(isBoolean);
  const dispatch = useDispatch(); */
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
      <main>
        <Teste />
      </main>
    </div>
  );
};

export default Home;
