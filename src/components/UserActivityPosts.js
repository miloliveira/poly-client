import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedTrue } from "../redux/isUpdatedGlobal";
const UserActivityPosts = () => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  const dispatch = useDispatch();
  const [postActivity, setpostActivity] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { userId } = useParams();
  const getPostActivity = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/in/${userId}/postActivity`
      );
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
    <div>
      {postActivity &&
        postActivity.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default UserActivityPosts;
