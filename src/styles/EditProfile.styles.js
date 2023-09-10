import styled from "styled-components";

export const EditProfilePage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EditProfileForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  input {
    width: 50%;
  }
  @media screen and (max-width: 1200px) {
    width: 60%;
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
      width: 80%;
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
    width: 10px;
    height: 30px;
    border: none;
    border-radius: 15px;
    :hover {
      text-decoration-line: underline;
    }
  }
`;

export const EditPasswordForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  input {
    width: 50%;
  }
  @media screen and (max-width: 1200px) {
    width: 60%;
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
      width: 80%;
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
    width: 155px;
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

export const ChangeSettingsFormDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  width: 100%;

  //padding-top: 20px;
  @media screen and (max-width: 1200px) {
    width: 60%;
  }

  @media screen and (max-width: 700px) {
    width: 70%;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
    flex-wrap: wrap;
  }
`;

export const ChangeSettingsFormButton = styled.button`
  font-weight: bold;
  padding: 0 10px;
  height: 30px;
  margin-right: 15px;
  border: none;
  :hover {
    text-decoration-line: underline;
  }
`;

export const DeleteProfileButton = styled.button`
  background-color: #eb6440;
  color: white;
  width: 110px;
  height: 30px;
  border: none;
  border-radius: 15px;
  :hover {
    text-decoration-line: underline;
  }
`;
