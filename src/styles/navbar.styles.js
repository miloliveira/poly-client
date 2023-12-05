import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { colors } from "./variables.styles";
import { NavLink } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  background-color: ${colors.softHighlight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainer = styled(Container)`
  width: 50%;
  @media screen and (max-width: 1200px) {
    width: 60%;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${colors.fontContrast};
  margin: 0;
`;

export const LogOutButton = styled.button`
  color: ${colors.strongHighlight};
  font-weight: bold;
  background-color: ${colors.backgroundPrimary};
  border: none;
  border-radius: 15px;
`;

export const NavbarBrandInnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  h2 {
    margin: 0;
  }
  img {
    height: 28px;
  }
`;
