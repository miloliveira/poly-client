import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
const NavBar = () => {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const loggingOut = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid ">
       {isLoggedIn?
        <Link to={"/feed"} className="navbar-brand" aria-current="page">
          Home
        </Link>
        :  <Link to={"/"} className="navbar-brand" aria-current="page">
          Home
        </Link>
       }


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {isLoggedIn && (
              <>
              
                <Link to={`/in/${user._id}`} className="nav-link">
                  my profile
                </Link>
                <Link to={`/edit/${user._id}`} className="nav-link">
                  Settings
                </Link>
                <button onClick={loggingOut} className="nav-link "  style={{backgroundColor: "#497174", border:"none", borderRadius:"15px", }}>
                  Log out
                </button>
              </>
            )}
            {!isLoggedIn && (
              <>
                <Link to={"/signup"} className="nav-link">
                  Signup
                </Link>
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
                <Link to={"/feed"} className="nav-link">
                  Feed
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
