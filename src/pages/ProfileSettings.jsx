// Dependencies
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

// Components
import ChangePasswordForm from "../components/ChangePasswordForm";
import ChangeProfileInfoForm from "../components/ChangeProfileInfoForm";

// Style
import {
  EditProfilePage,
  ChangeSettingsFormDiv,
  ChangeSettingsFormButton,
} from "../styles/EditProfile.styles";

const ProfileSettings = () => {
  // State and context variables
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(1);
  const { user, isLoggedIn } = useContext(AuthContext);
  const { userId } = useParams();
  const [firebaseUser] = useAuthState(auth);

  return (
    <>
      {isLoggedIn && user._id === userId && (
        <EditProfilePage>
          {!firebaseUser && (
            <>
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
                    color: showChangePasswordForm === 2 ? "white" : "#497174",
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
            </>
          )}
          {firebaseUser && (
            <>
              <ChangeSettingsFormDiv />
              <ChangeSettingsFormButton
                style={{
                  backgroundColor: "#497174",
                  color: "white",
                }}
              >
                Edit profile info
              </ChangeSettingsFormButton>
              <ChangeProfileInfoForm userId={userId} />
            </>
          )}
        </EditProfilePage>
      )}
    </>
  );
};

export default ProfileSettings;
