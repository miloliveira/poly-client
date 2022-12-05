import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
const FollowBtn = (props) => {
  const { followUserId, post } = props;
  const [isFollowing, setIsFollowing] = useState(false);
  const getToken = localStorage.getItem("authToken");
  const { user } = useContext(AuthContext);
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  const dispatch = useDispatch();

  const handleFollow = async () => {
    try {
      const body = await { followUserId };
      await axios.put(
        `${process.env.REACT_APP_API_URL}/in/${user._id}/follow`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      dispatch(isUpdatedFalse());
    } catch (error) {
      console.log(error);
    }
  };

  /* const checkUser = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/in/${post.user._id}`
    );

    
    console.log("this is the response", response.data);
  }; */

  useEffect(() => {
    //checkUser();
    if (post.user.followers.includes(user._id)) {
      setIsFollowing(true);
      console.log("is following", isFollowing);
      dispatch(isUpdatedTrue());
    } else {
      setIsFollowing(false);
      console.log("is following", isFollowing);
      dispatch(isUpdatedTrue());
    }
  }, [isUpdatedGlobal]);

  return (
    <button onClick={() => handleFollow()}>
      {isFollowing ? "following" : "follow"}
    </button>
  );
};

export default FollowBtn;
