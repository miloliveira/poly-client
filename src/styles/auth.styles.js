import styled from "styled-components";
import ErrorIcon from "@mui/icons-material/Error";

export const ErrorMessageIcon = styled(ErrorIcon)`
  color: #497174;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
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
    border-radius: 15px;
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

//Signup form

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
    border-radius: 15px;
  }
`;
