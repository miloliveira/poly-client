import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ChangeProfileInfoForm from "../components/ChangeProfileInfoForm";
import {
  EditProfilePage,
  ChangeSettingsFormDiv,
  ChangeSettingsFormButton,
} from "../styles/EditProfile.styles";
const ProfileSettings = () => {
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(1);
  const { user, isLoggedIn } = useContext(AuthContext);

  const { userId } = useParams();

  return (
    <>
      {isLoggedIn && user._id === userId && (
        <EditProfilePage>
          <ChangeSettingsFormDiv>
            <ChangeSettingsFormButton
              onClick={() => setShowChangePasswordForm(1)}
              style={{
                backgroundColor:
                  showChangePasswordForm === 1 ? "#497174" : "#EFF5F5",
                color: showChangePasswordForm === 1 ? "white" : "#497174",
              }}
            >
              Edit profile info
            </ChangeSettingsFormButton>

            <ChangeSettingsFormButton
              onClick={() => setShowChangePasswordForm(2)}
              style={{
                backgroundColor:
                  showChangePasswordForm === 2 ? "#497174" : "#EFF5F5",
                color: showChangePasswordForm === 2 ? "white" : "#497174"
                
              }}
            >
              Edit password
            </ChangeSettingsFormButton>
          </ChangeSettingsFormDiv>

          {showChangePasswordForm === 2 ? (
            <ChangePasswordForm userId={userId} />
          ) : (
            showChangePasswordForm === 1 && (
              <ChangeProfileInfoForm userId={userId} />
            )
          )}
        </EditProfilePage>
      )}
    </>
  );
};

export default ProfileSettings;
