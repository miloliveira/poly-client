import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedTrue } from "../redux/isUpdatedGlobal";
import Location from "../components/Location";
import Education from "../components/Education";
import Occupation from "../components/Occupation";
import UserActivityPosts from "../components/UserActivityPosts";
import UserActivityLikes from "../components/UserActivityLikes";
import UserActivityComments from "../components/UserActivityComments";
import LoadingSpinner from "../components/LoadingSpinner";
import {
  ProfilePage,
  ProfileMainDiv,
  ProfileUserBannerDiv,
  ProfileUserBannerInnerDiv,
  BannerFollowDiv,
  ProfileImage,
  AboutDiv,
  AboutInnerDiv,
  AboutInnerDivComponents,
  AddAboutInfoDiv,
  AddAboutInfoIcon,
  AboutDropDownDiv,
  AboutDropDownButton,
  DropDownIcon,
  DropUpIcon,
  ActivityDiv,
  ActivityTabDiv,
  ActivityTabButton,
  ActivityContentDiv,
} from "../styles/profile.styles";
const Profile = () => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const [profileUser, setProfileUser] = useState();
  const { userId } = useParams();
  const [showAboutSection, setShowAboutSection] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [showActivity, setShowActivity] = useState(0);
  const getUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/in/${userId}`
      );
      await setProfileUser(response.data);
      console.log(response.data);
      await dispatch(isUpdatedTrue());
      await setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getUser();
    setActive(true);
  }, [userId, isUpdatedGlobal]);

  return (
    <ProfilePage>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {profileUser && (
            <ProfileMainDiv>
              <ProfileUserBannerDiv>
                <ProfileUserBannerInnerDiv>
                  <ProfileImage src={profileUser.imageUrl} alt="profile pic" />
                  <BannerFollowDiv>
                    {profileUser.followers.length === 1 ? (
                      <p>{profileUser.followers.length} follower</p>
                    ) : (
                      <p>{profileUser.followers.length} followers</p>
                    )}

                    <p>{profileUser.following.length} following</p>
                  </BannerFollowDiv>
                </ProfileUserBannerInnerDiv>
                <h2>{profileUser.name}</h2>
              </ProfileUserBannerDiv>
              {((user && userId === user._id) ||
                (user && profileUser.about) ||
                profileUser.occupation ||
                profileUser.occupation ||
                profileUser.occupation) && (
                <AboutDiv>
                  <h4>About</h4>
                  {user && user._id === userId && !profileUser.about ? (
                    <p>Complete your about section in the settings!</p>
                  ) : (
                    <p>{profileUser.about}</p>
                  )}

                  {showAboutSection && (
                    <AboutInnerDiv>
                      <AboutInnerDivComponents>
                        {profileUser.location && (
                          <Location location={profileUser.location} />
                        )}
                        {profileUser.education && (
                          <Education education={profileUser.education} />
                        )}
                        {profileUser.occupation && (
                          <Occupation occupation={profileUser.occupation} />
                        )}
                      </AboutInnerDivComponents>
                      {((user &&
                        user._id === userId &&
                        !profileUser.occupation) ||
                        (user &&
                          user._id === userId &&
                          !profileUser.education) ||
                        (user &&
                          user._id === userId &&
                          !profileUser.location)) && (
                        <AddAboutInfoDiv>
                          <Link to={`/edit/${userId}`} className="nav-link">
                            <AddAboutInfoIcon />
                          </Link>
                        </AddAboutInfoDiv>
                      )}
                    </AboutInnerDiv>
                  )}
                  {user &&
                    (profileUser.occupation ||
                      profileUser.education ||
                      profileUser.location) && (
                      <AboutDropDownDiv>
                        <AboutDropDownButton
                          onClick={() => {
                            setShowAboutSection(!showAboutSection);
                          }}
                        >
                          {showAboutSection ? <DropUpIcon /> : <DropDownIcon />}
                        </AboutDropDownButton>
                      </AboutDropDownDiv>
                    )}
                </AboutDiv>
              )}

              <ActivityDiv>
                <h4>Activity</h4>
                <ActivityTabDiv>
                  <ActivityTabButton
                    onClick={(e) => {
                      setShowActivity(0);
                    }}
                    style={{
                      backgroundColor: active ? "#497174" : "#EFF5F5",
                      color: active ? "white" : "#497174",
                    }}
                  >
                    posts
                  </ActivityTabButton>
                  <ActivityTabButton
                    onClick={(e) => {
                      setShowActivity(1);
                      setActive(false);
                    }}
                  >
                    comments
                  </ActivityTabButton>
                  <ActivityTabButton
                    onClick={(e) => {
                      setShowActivity(2);
                      setActive(false);
                    }}
                  >
                    likes
                  </ActivityTabButton>
                </ActivityTabDiv>
                <ActivityContentDiv>
                  {showActivity === 0 ? (
                    <UserActivityPosts userId={userId} />
                  ) : showActivity === 1 ? (
                    <UserActivityComments userId={userId} />
                  ) : (
                    <UserActivityLikes userId={userId} />
                  )}
                </ActivityContentDiv>
              </ActivityDiv>
            </ProfileMainDiv>
          )}
        </>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </ProfilePage>
  );
};

export default Profile;
