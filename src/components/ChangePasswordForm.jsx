// Dependencies
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Style
import { EditPasswordForm } from "../styles/EditProfile.styles";

const ChangePasswordForm = (props) => {
  // Destructure props
  const { userId } = props;
  // State variables
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  // Navigation function
  const navigate = useNavigate();
  // Get authentication token from local storage
  const getToken = localStorage.getItem("authToken");
  // Function to verify if passwords match before updating
  const verifyPassword = async (e) => {
    // Prevent the default form submission
    await e.preventDefault();
    // Check if the passwords match
    if (newPassword1 === newPassword2) {
      await handleChangePassword(e);
    } else {
      setErrorMessage("Passwords do not match.");
    }
  };
  // Function to handle the password change
  const handleChangePassword = async (e) => {
    try {
      // Prevent the default form submission
      e.preventDefault();
      const body = { newPassword: newPassword1 };
      // Send request to update password
      await axios.put(
        `${process.env.REACT_APP_API_URL}/edit-password/${userId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      // Reset error message and navigate to current user's profile page
      setErrorMessage("");
      navigate(`/in/${userId}`);
    } catch (error) {
      // Handle errors and set error message
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  return (
    <EditPasswordForm onSubmit={verifyPassword}>
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
      <button
        type="submit"
        disabled={!newPassword1 || !newPassword2}
        style={{
          backgroundColor: (!newPassword1 || !newPassword2) && "#b1ccce",
          textDecoration: (!newPassword1 || !newPassword2) && "none",
        }}
      >
        Save changes
      </button>
    </EditPasswordForm>
  );
};

export default ChangePasswordForm;
