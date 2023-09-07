import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EditPasswordForm } from "../styles/EditProfile.styles";
const ChangePasswordForm = (props) => {
  const { userId } = props;
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(undefined);
  const getToken = localStorage.getItem("authToken");

  const verifyPassword = async (e) => {
    await e.preventDefault();

    if (newPassword1 === newPassword2) {
      await handleChangePassword(e);
    } else {
      setErrorMessage("Passwords do not match.");
    }
  };

  const handleChangePassword = async (e) => {
    try {
      e.preventDefault();
      const body = { newPassword: newPassword1 };
      await axios.put(
        `${process.env.REACT_APP_API_URL}/edit-password/${userId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setErrorMessage("");
      navigate(`/in/${userId}`);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  return (
    <EditPasswordForm onSubmit={verifyPassword}>
      <h4>Change your password</h4>
      {/*  <label htmlFor="former-password">Old password</label>
      <input id="former-password" type="password" /> */}
      <label htmlFor="new-password-1">New password</label>
      <input
        id="new-password-1"
        type="password"
        value={newPassword1}
        onChange={(e) => {
          setNewPassword1(e.target.value);
          setErrorMessage("");
        }}
      />
      <label htmlFor="new-password-2">Repeat new password</label>
      <input
        id="new-password-2"
        type="password"
        value={newPassword2}
        onChange={(e) => setNewPassword2(e.target.value)}
      />
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Save your changes</button>
    </EditPasswordForm>
  );
};

export default ChangePasswordForm;
