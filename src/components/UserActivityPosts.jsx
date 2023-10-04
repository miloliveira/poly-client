import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
const UserActivityPosts = (props) => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  const dispatch = useDispatch();
  const [postActivity, setpostActivity] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { userId, qty } = props;
  const getPostActivity = async () => {
    let response;
    try {
      if (qty) {
        response = await axios.get(
          `${process.env.REACT_APP_API_URL}/in/${userId}/postActivity/${qty}`
        );
      } else {
        response = await axios.get(
          `${process.env.REACT_APP_API_URL}/in/${userId}/postActivity`
        );
      }

      setpostActivity(response.data);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    getPostActivity();
  }, [isUpdatedGlobal]);

  return (
    <>
      {postActivity && postActivity.length === 0 ? (
        <p>No activity to show</p>
      ) : (
        postActivity.map((post) => {
          return <Post key={post._id} post={post} />;
        })
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default UserActivityPosts;
