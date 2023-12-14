import React, { useContext } from "react";
import axios from "axios";

import { AuthContext } from "../context/auth.context";
import { useDispatch } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobalSlice";
import { showAlert, defineAlertSettings } from "../redux/showAlertSlice";

import { ShareIcon, ShareButton } from "../styles/post.styles";

const SharePost = (props) => {
  const { postId } = props;
  const { user } = useContext(AuthContext);
  const getToken = localStorage.getItem("authToken");

  const dispatch = useDispatch();

  const handleShare = async () => {
    console.log("share this post", postId);
    try {
      const body = { userId: user._id };
      await axios.post(
        `${process.env.REACT_APP_API_URL}/share-post/${postId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      await dispatch(isUpdatedFalse());
      dispatch(showAlert());
      dispatch(
        defineAlertSettings({
          severity: "success",
          message: "shared post with success",
        })
      );
    } catch (error) {
      dispatch(
        defineAlertSettings({
          severity: "error",
          message: "the post has already been shared",
        })
      );
      dispatch(showAlert());
    }
  };
  return (
    <ShareButton onClick={handleShare}>
      <ShareIcon></ShareIcon> share
    </ShareButton>
  );
};

export default SharePost;
