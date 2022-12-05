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
  //console.log(isUpdatedGlobal);
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
  //console.log("this is it", post.user.followers);
  // console.log("this is the user", user._id);
  //console.log(post);
  useEffect(() => {
    if (post.user.followers.includes(user._id)) {
      setIsFollowing(true);
      isUpdatedTrue();
    } else if (!post.user.followers.includes(user._id)) {
      setIsFollowing(false);
      isUpdatedTrue();
    }
  }, [isUpdatedGlobal]);

  return (
    <button onClick={() => handleFollow()}>
      {isFollowing ? "following" : "follow"}
    </button>
  );
};

export default FollowBtn;
