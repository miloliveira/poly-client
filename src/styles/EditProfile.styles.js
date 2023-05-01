import styled from "styled-components";

export const EditProfilePage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EditProfileForm = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 1200px) {
    width: 80%;
    input {
      width: 60%;
    }
  }

  @media screen and (max-width: 700px) {
    width: 70%;
    input {
      width: 70%;
    }
  }

  @media screen and (max-width: 400px) {
    width: 90%;
    input {
      width: 90%;
    }
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
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 15px;
    :hover {
      text-decoration-line: underline;
    }
  }
`;

export const InputProfilePicDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 40%;
    border-radius: 10px;
    margin-bottom: 10px;
    border: 1px solid #d6e4e5;
    outline: none;
    padding: 0;
    @media screen and (max-width: 700px) {
      width: 70%;
    }
  }

  input::file-selector-button {
    color: #497174;
    background-color: #eff5f5;
    border: 1px solid #d6e4e5;
    border-radius: 10px;
    cursor: pointer;
  }
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: 20% 10%;
    border-radius: 100px;
    @media screen and (max-width: 400px) {
      width: 150px;
      height: 150px;
    }
  }
`;

export const DeleteProfileButton = styled.button`
  background-color: #eb6440;
  color: white;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 15px;
  :hover {
    text-decoration-line: underline;
  }
`;
