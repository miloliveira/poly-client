import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
const FollowBtn = (props) => {
  const { currentUserId, followUserId } = props;
  const [isFollowing, setIsFollowing] = useState(false);

  const getToken = localStorage.getItem("authToken");
  const { isLoggedIn, user } = useContext(AuthContext);

  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  console.log(isUpdatedGlobal);
  const dispatch = useDispatch();

  const checkIfIsFollowing = () => {
    const body = { followUserId };
    axios
      .get(`http://localhost:5005/in/${currentUserId}/follow`, body, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    //await setIsFollowing(response.data);
  };

  const handleFollow = async () => {
    try {
      const body = await { followUserId };
      await axios.put(
        `http://localhost:5005/in/${currentUserId}/follow`,
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

  useEffect(() => {
    //checkIfIsFollowing();
  }, []);

  return (
    <div>
      <button onClick={() => handleFollow()}>follow</button>
    </div>
  );
};

export default FollowBtn;
