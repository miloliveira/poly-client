import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import service from "../api/service";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ChangeProfileInfoForm from "../components/ChangeProfileInfoForm";
import LoadingSpinner from "../components/LoadingSpinner";
import {
  EditProfilePage,
  EditProfileForm,
  InputProfilePicDiv,
  DeleteProfileButton,
} from "../styles/EditProfile.styles";
const ProfileSettings = () => {
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const { user, isLoggedIn, logoutUser } = useContext(AuthContext);
  const { userId } = useParams();

  const [errorMessage, setErrorMessage] = useState(undefined);

  return (
    <>
      {isLoggedIn && user._id === userId && (
        <EditProfilePage>
          {showChangePasswordForm ? (
            <ChangePasswordForm userId={userId} />
          ) : (
            <ChangeProfileInfoForm userId={userId} />
          )}
          <button
            onClick={() => setShowChangePasswordForm(!showChangePasswordForm)}
          >
            {showChangePasswordForm ? "change profile info" : "change password"}
          </button>
        </EditProfilePage>
      )}
    </>
  );
};

export default ProfileSettings;
