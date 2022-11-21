import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
const FollowBtn = (props) => {
  const { followUserId, post } = props;
  const [isFollowing, setIsFollowing] = useState(false);
  const getToken = localStorage.getItem("authToken");
  const { isLoggedIn, user } = useContext(AuthContext);

  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  //console.log(isUpdatedGlobal);
  const dispatch = useDispatch();

  const checkIfIsFollowing = async () => {
    try {
      const body = { followUserId };
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/in/${user._id}/follow`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      await setIsFollowing(response);
      console.log("this is the response", response);
    } catch (error) {
      console.log(error);
    }
  };
  /*   const checkIfFollow = ()=>{

    if (post.user.followers.includes(user._id)) {
      setIsFollowing(true);
     
    } else if (!post.user.followers.includes(user._id)) {
      setIsFollowing(false);
      
    }

  } */

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

      await dispatch(isUpdatedFalse());
    } catch (error) {
      console.log(error);
    }
  };
  //console.log("this is it", post.user.followers);
  console.log("this is the user", user._id);
  console.log(post);
  useEffect(() => {
    //checkIfIsFollowing();
    if (isLoggedIn && post.user.followers.includes(user._id)) {
      setIsFollowing(true);
    } else if (isLoggedIn && !post.user.followers.includes(user._id)) {
      setIsFollowing(false);
    }
  }, [isUpdatedGlobal]);

  return (
    <div>
      <button onClick={() => handleFollow()}>
        {isFollowing ? "following" : "follow"}
      </button>
    </div>
  );
};

export default FollowBtn;
