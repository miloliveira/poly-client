import styled from "styled-components";
import { colors } from "./variables.styles";
export const HomePage = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePageShowLoginDiv = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePageShowSignupDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePageInnerDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    margin: 0;
  }
  button {
    margin-left: 5px;
    margin-top: 5px;
    color: ${colors.fontWhite};
    background-color: ${colors.strongHighlight};
    padding: 3px 10px;
    border: 2px solid ${colors.strongHighlight};
    border-radius: 5px;
  }
`;
