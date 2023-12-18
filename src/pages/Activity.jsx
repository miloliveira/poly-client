// Dependencies
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import UserActivityPosts from "../components/UserActivityPosts";
import UserActivityLikes from "../components/UserActivityLikes";
import UserActivityComments from "../components/UserActivityComments";
import UserActivityShares from "../components/UserActivityShares";
import AlertPopup from "../components/AlertPopup";

// Style
import {
  ActivityPage,
  ActivityMainDiv,
  ActivityDiv,
  ActivityTabDiv,
  ActivityTabButton,
} from "../styles/activity.styles";

const Activity = () => {
  // state and context variables
  const { userId } = useParams();
  const [showActivity, setShowActivity] = useState(0);

  // Redux state and dispatch
  const alertOnScreen = useSelector(
    (state) => state.alertOnScreen.showAlertOnScreen.value
  );

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <ActivityPage>
      <ActivityMainDiv>
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
              }}
              style={{
                backgroundColor: showActivity === 2 ? "#497174" : "#EFF5F5",
                color: showActivity === 2 ? "white" : "#497174",
              }}
            >
              likes
            </ActivityTabButton>
            <ActivityTabButton
              onClick={(e) => {
                setShowActivity(3);
              }}
              style={{
                backgroundColor: showActivity === 3 ? "#497174" : "#EFF5F5",
                color: showActivity === 3 ? "white" : "#497174",
              }}
            >
              shares
            </ActivityTabButton>
          </ActivityTabDiv>

          {showActivity === 0 ? (
            <UserActivityPosts userId={userId} />
          ) : showActivity === 1 ? (
            <UserActivityComments userId={userId} />
          ) : showActivity === 2 ? (
            <UserActivityLikes userId={userId} />
          ) : (
            <UserActivityShares userId={userId} />
          )}
        </ActivityDiv>
      </ActivityMainDiv>
      {alertOnScreen && <AlertPopup />}
    </ActivityPage>
  );
};

export default Activity;
