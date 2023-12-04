import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { AuthContext } from "../context/auth.context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  StyledNavbar,
  StyledContainer,
  LogOutButton,
  StyledNavLink,
} from "../styles/navbar.styles";
const NavBar = () => {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <StyledNavbar collapseOnSelect expand="lg">
      <StyledContainer>
        <LinkContainer to={`/`}>
          <Navbar.Brand>Poly</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn && (
              <>
                <LinkContainer to={`/in/${user._id}`}>
                  <StyledNavLink>my profile</StyledNavLink>
                </LinkContainer>

                <LinkContainer to={`/edit/${user._id}`} className="nav-link">
                  <StyledNavLink>settings</StyledNavLink>
                </LinkContainer>

                <LogOutButton
                  onClick={() => {
                    logoutUser();
                    navigate("/");
                  }}
                >
                  log out
                </LogOutButton>
              </>
            )}
            {!isLoggedIn && (
              <LinkContainer to={"/feed"} className="nav-link">
                <StyledNavLink>feed</StyledNavLink>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default NavBar;
