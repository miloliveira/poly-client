import styled from "styled-components";
import ErrorIcon from "@mui/icons-material/Error";
import { colors } from "./variables.styles";

//icons
export const ErrorMessageIcon = styled(ErrorIcon)`
  color: #497174;
`;

//styled components
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  input {
    border-radius: 5px;
    padding: 0px 5px;
    margin-bottom: 10px;
    border: 1px solid ${colors.border};
    outline: none;
  }
  button {
    margin-bottom: 10px;
    background-color: ${colors.strongHighlight};
    color: ${colors.fontWhite};
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 5px;
  }
`;

export const AuthErrorMessage = styled.div`
  max-width: 300px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  p {
    height: 100%;
    margin-left: 10px;
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  h4 {
    width: 80%;
    text-align: center;
  }
  input {
    border-radius: 5px;
    padding: 0px 5px;
    margin-bottom: 10px;
    border: 1px solid ${colors.border};
    outline: none;
  }
  button {
    margin-bottom: 10px;
    background-color: ${colors.strongHighlight};
    color: ${colors.fontWhite};
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 5px;
  }
`;
