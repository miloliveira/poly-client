import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import { useSelector } from "react-redux";
const UserActivityLikes = (props) => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  const [likeActivity, setLikeActivity] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { userId } = props;

  const getLikeActivity = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/in/${userId}/likeActivity`
      );
      await setLikeActivity(response.data);
      console.log(likeActivity);
    } catch (error) {
        setErrorMessage(error.response.data.errorMessage);
        console.log(errorMessage);
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
