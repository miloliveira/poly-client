// Dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

// Components
import Post from "./Post";

const UserActivityComments = (props) => {
  // State and context variables
  const [commentActivity, setCommentActivity] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { userId, qty } = props;

  // Redux state
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  // Function fetching user's share activity.
  const getCommentActivity = async () => {
    let response;
    try {
      if (qty) {
        response = await axios.get(
          `${process.env.REACT_APP_API_URL}/in/${userId}/commentActivity/${qty}`
        );
      } else {
        response = await axios.get(
          `${process.env.REACT_APP_API_URL}/in/${userId}/commentActivity`
        );
      }
      setCommentActivity(response.data);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  useEffect(() => {
    getCommentActivity();
  }, [isUpdatedGlobal]);

  return (
    <div>
      {commentActivity &&
        commentActivity.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      {commentActivity.length === 0 && <p>No activity to show</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default UserActivityComments;
