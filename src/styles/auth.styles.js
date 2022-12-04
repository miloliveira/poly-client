import { style } from "@mui/system";
import styled from "styled-components";
import ErrorIcon from "@mui/icons-material/Error";

export const ErrorMessageIcon = styled(ErrorIcon)`
  color: #497174;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    border-radius: 10px;
    padding: 0px 5px;
    margin-bottom: 10px;
    border: 1px solid #d6e4e5;
    outline: none;
  }
  button {
    margin-bottom: 10px;
    background-color: #497174;
    color: white;
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 10px;
  }
`;

export const LoginErrorMessage = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
  }
`;
