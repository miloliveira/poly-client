// Dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

// Components
import Post from "./Post";
const UserActivityLikes = (props) => {
  // State and context variables
  const [likeActivity, setLikeActivity] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { userId, qty } = props;

  // Redux state
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  // Function fetching user's like activity.
  const getLikeActivity = async () => {
    let response;
    try {
      if (qty) {
        response = await axios.get(
          `${process.env.REACT_APP_API_URL}/in/${userId}/likeActivity/${qty}`
        );
      } else {
        response = await axios.get(
          `${process.env.REACT_APP_API_URL}/in/${userId}/likeActivity`
        );
      }
      setLikeActivity(response.data);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  useEffect(() => {
    getLikeActivity();
  }, [isUpdatedGlobal]);

  return (
    <div>
      {likeActivity &&
        likeActivity.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      {likeActivity.length === 0 && <p>No activity to show</p>}
    </div>
  );
};

export default UserActivityLikes;
