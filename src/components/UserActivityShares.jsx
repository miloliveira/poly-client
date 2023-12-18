// Dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

// Components
import Post from "./Post";

const UserActivityShares = (props) => {
  // State and context variables
  const [shareActivity, setShareActivity] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { userId, qty } = props;

  // Redux state
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  // Function fetching user's share activity.
  const getShareActivity = async () => {
    let response;
    try {
      if (qty) {
        response = await axios.get(
          `${process.env.REACT_APP_API_URL}/in/${userId}/shareActivity/${qty}`
        );
      } else {
        response = await axios.get(
          `${process.env.REACT_APP_API_URL}/in/${userId}/shareActivity`
        );
      }
      // Updating the updatedPosts Array with isShared key.
      const updatedPosts = response.data.map((post) => {
        const isShared = true;
        return { ...post, isShared };
      });
      setShareActivity(updatedPosts);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  useEffect(() => {
    getShareActivity();
  }, [isUpdatedGlobal]);

  return (
    <div>
      {shareActivity &&
        shareActivity.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      {shareActivity.length === 0 && <p>No activity to show</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default UserActivityShares;
