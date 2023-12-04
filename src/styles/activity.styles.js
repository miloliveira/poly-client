import styled from "styled-components";
import { colors } from "./variables.styles";

export const ActivityPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActivityMainDiv = styled.div`
  height: auto;
  width: 40%;
  margin-top: 10px;
  @media screen and (max-width: 1200px) {
    width: 50%;
  }

  @media screen and (max-width: 700px) {
    width: 75%;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const ActivityDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundSecondary};
  border-radius: 5px;
  border: 1px solid ${colors.border};
  padding: 10px;
  h4 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
  }
  p {
    font-size: 0.9rem;
  }
`;

export const ActivityTabDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
  @media screen and (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

export const ActivityTabButton = styled.button`
  font-weight: bold;
  padding: 0 10px;
  margin-right: 5px;
  font-size: 0.9rem;
  height: 30px;
  border: none;
  border-radius: 15px;
  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
`;
