import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
import {
  ProfilePage,
  ProfileMainDiv,
  ProfileUserBannerDiv,
  ProfileUserBannerInnerDiv,
  BannerFollowDiv,
  ProfileImage,
  AboutDiv,
  DropDownIcon,
  DropUpIcon,
  RecentActivityDiv,
  ActivityPostsDiv,
} from "../styles/profile.styles";
const Profile = () => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  const dispatch = useDispatch();

  const [profileUser, setProfileUser] = useState();
  const { userId } = useParams();
  const [userPosts, setUserPosts] = useState([]);
  const [likedPosts, setlikedPosts] = useState([]);
  const [showAboutSection, setShowAboutSection] = useState(false);
  const { user, isLoggedIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/in/${userId}`
      );
      await setProfileUser(response.data);
      await setUserPosts(response.data.posts);
      await setlikedPosts(response.data.likedPosts);

      console.log(response.data);
      await dispatch(isUpdatedTrue());
      await userPosts.sort(
        (x, y) => +new Date(y.createdAt) - +new Date(x.createdAt)
      );
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  useEffect(() => {
    getUser();
  }, [userId, isUpdatedGlobal]);

  return (
    <ProfilePage>
      {errorMessage && <p>{errorMessage}</p>}
      {profileUser && (
        <ProfileMainDiv>
          <ProfileUserBannerDiv>
            <ProfileUserBannerInnerDiv>
              <ProfileImage src={profileUser.imageUrl} alt="profile pic" />
              <BannerFollowDiv>
                <p>{profileUser.followers.length} followers</p>

                <p>{profileUser.following.length} following</p>
              </BannerFollowDiv>
            </ProfileUserBannerInnerDiv>
            <h2>{profileUser.name}</h2>
          </ProfileUserBannerDiv>
          <AboutDiv>
            <h4>About</h4>
            {user == profileUser._id && !profileUser.about ? (
              <p>Fill your about Section in the settings</p>
            ) : (
              <p>{profileUser.about}</p>
            )}
            {showAboutSection && (
              <div>
                <p>Occupation: {profileUser.occupation}</p>
                <p>Location: {profileUser.location}</p>
                <p>Education: {profileUser.education}</p>
              </div>
            )}
            <button
              onClick={() => {
                setShowAboutSection(!showAboutSection);
              }}
            >
              {showAboutSection ? <DropUpIcon /> : <DropDownIcon />}
            </button>
          </AboutDiv>
          {/*  <p>
            {profileUser.occupation} - {profileUser.location}
          </p> */}
          <RecentActivityDiv>
            <h4>Recent activity</h4>
            <ActivityPostsDiv>
              {userPosts.length > 0 && (
                <div>
                  <p>{profileUser.name} posted this</p>
                  <Post post={userPosts[0]} />
                </div>
              )}
            </ActivityPostsDiv>

            <Link to={`/in/${user._id}/activity`}>Check full activity</Link>
          </RecentActivityDiv>

          {/* 
           <p>followers</p>
          {!isLoggedIn && (
            <div>
              <p>{profileUser.followers.length} followers </p>
              <p>log in to check the complete info</p>
            </div>
          )} */}
          {/* {isLoggedIn &&
            profileUser.followers.length > 0 &&
            profileUser.followers.map((follower) => {
              return (
                <div>
                  <p>{follower.name}</p>
                </div>
              );
            })} */}

          {/*
           <p>following</p>
            {isLoggedIn &&
            profileUser.following.length > 0 &&
            profileUser.following.map((follow) => {
              return (
                <div>
                  <p>{follow.name}</p>
                </div>
              );
            })} */}
        </ProfileMainDiv>
      )}
    </ProfilePage>
  );
};

export default Profile;
