import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedTrue } from "../redux/isUpdatedGlobal";
import About from "../components/About";
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
  UserActivityLink,
} from "../styles/profile.styles";
import {
  ActivityDiv,
  ActivityTabDiv,
  ActivityTabButton,
  ActivityContentDiv,
} from "../styles/activity.styles";

const Profile = () => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  const dispatch = useDispatch();

  const [profileUser, setProfileUser] = useState();
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [showActivity, setShowActivity] = useState(0);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/in/${userId}`
      );
      setProfileUser(response.data);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  useEffect(() => {
    getUser();

    dispatch(isUpdatedTrue());
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
                <About user={user} userId={userId} profileUser={profileUser} />
              )}
              <ActivityDiv>
                <h4>Activity</h4>
                <ActivityTabDiv>
                  <ActivityTabButton
                    onClick={(e) => {
                      setShowActivity(0);
                    }}
                    style={{
                      backgroundColor:
                        showActivity === 0 ? "#497174" : "#EFF5F5",
                      color: showActivity === 0 ? "white" : "#497174",
                    }}
                  >
                    posts
                  </ActivityTabButton>
                  <ActivityTabButton
                    onClick={(e) => {
                      setShowActivity(1);
                    }}
                    style={{
                      backgroundColor:
                        showActivity === 1 ? "#497174" : "#EFF5F5",
                      color: showActivity === 1 ? "white" : "#497174",
                    }}
                  >
                    comments
                  </ActivityTabButton>
                  <ActivityTabButton
                    onClick={(e) => {
                      setShowActivity(2);
                    }}
                    style={{
                      backgroundColor:
                        showActivity === 2 ? "#497174" : "#EFF5F5",
                      color: showActivity === 2 ? "white" : "#497174",
                    }}
                  >
                    likes
                  </ActivityTabButton>
                </ActivityTabDiv>
                <ActivityContentDiv>
                  {showActivity === 0 ? (
                    <UserActivityPosts userId={userId} qty={3} />
                  ) : showActivity === 1 ? (
                    <UserActivityComments userId={userId} qty={3} />
                  ) : (
                    <UserActivityLikes userId={userId} qty={3} />
                  )}
                </ActivityContentDiv>
                <UserActivityLink to={`/in/${userId}/activity`}>
                  See full activity
                </UserActivityLink>
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
