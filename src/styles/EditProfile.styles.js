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
  margin-top: 20px;

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
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: 20% 10%;
    border-radius: 100px;
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
