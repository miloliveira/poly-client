import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { colors } from "./variables.styles";
import { NavLink } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  background-color: ${colors.softHighlight};
`;

export const StyledNavLink = styled(NavLink)`
  color: ${colors.fontContrast};
`;
export const LogOutButton = styled.button`
  color: ${colors.strongHighlight};
  font-weight: bold;
  background-color: ${colors.backgroundPrimary};
  border: none;
  border-radius: 15px;
`;
