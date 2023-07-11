import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ChangeProfileInfoForm from "../components/ChangeProfileInfoForm";
import {
  EditProfilePage,
  ToggleSettingsFormButton,
} from "../styles/EditProfile.styles";
const ProfileSettings = () => {
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const { user, isLoggedIn } = useContext(AuthContext);
  const { userId } = useParams();

  return (
    <>
      {isLoggedIn && user._id === userId && (
        <EditProfilePage>
          {showChangePasswordForm ? (
            <ChangePasswordForm userId={userId} />
          ) : (
            <ChangeProfileInfoForm userId={userId} />
          )}
          <ToggleSettingsFormButton
            onClick={() => setShowChangePasswordForm(!showChangePasswordForm)}
          >
            {showChangePasswordForm ? "back" : "change password"}
          </ToggleSettingsFormButton>
        </EditProfilePage>
      )}
    </>
  );
};

export default ProfileSettings;
