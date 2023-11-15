import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";

const UserActivityShares = (props) => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  const [shareActivity, setShareActivity] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { userId, qty } = props;

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
      setShareActivity(response.data);
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
