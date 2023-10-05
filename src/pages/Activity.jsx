import React, { useState, useEffect, useContext } from "react";
import UserActivityPosts from "../components/UserActivityPosts";
import UserActivityLikes from "../components/UserActivityLikes";
import UserActivityComments from "../components/UserActivityComments";
import { useParams } from "react-router-dom";
import {
  ActivityDiv,
  ActivityTabDiv,
  ActivityTabButton,
  ActivityContentDiv,
} from "../styles/profile.styles";

const Activity = () => {
  const { userId } = useParams();
  const [showActivity, setShowActivity] = useState(0);
  const [active, setActive] = useState(true);
  return (
    <div>
      <ActivityDiv>
        <h4>Activity</h4>
        <ActivityTabDiv>
          <ActivityTabButton
            onClick={(e) => {
              setShowActivity(0);
            }}
            style={{
              backgroundColor: showActivity === 0 ? "#497174" : "#EFF5F5",
              color: showActivity === 0 ? "white" : "#497174",
            }}
          >
            posts
          </ActivityTabButton>
          <ActivityTabButton
            onClick={(e) => {
              setShowActivity(1);
              setActive(false);
            }}
            style={{
              backgroundColor: showActivity === 1 ? "#497174" : "#EFF5F5",
              color: showActivity === 1 ? "white" : "#497174",
            }}
          >
            comments
          </ActivityTabButton>
          <ActivityTabButton
            onClick={(e) => {
              setShowActivity(2);
              setActive(false);
            }}
            style={{
              backgroundColor: showActivity === 2 ? "#497174" : "#EFF5F5",
              color: showActivity === 2 ? "white" : "#497174",
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
    </div>
  );
};

export default Activity;
