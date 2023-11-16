import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import { colors } from "./variables.styles";

export const StyledNavbar = styled(Navbar)`
  background-color: ${colors.strongHighlight};
`;

export const LogOutButton = styled.button`
  color: ${colors.strongHighlight};
  font-weight: bold;
  background-color: ${colors.backgroundPrimary};
  border: none;
  border-radius: 15px;
`;
