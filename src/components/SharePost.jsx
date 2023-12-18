// Dependencies
import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useDispatch } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobalSlice";
import { showAlert, defineAlertSettings } from "../redux/showAlertSlice";

// Style
import { ShareIcon, ShareButton } from "../styles/post.styles";

const SharePost = (props) => {
  // Destructure props
  const { postId } = props;

  // Authentication context and local storage
  const { user } = useContext(AuthContext);
  const getToken = localStorage.getItem("authToken");

  // Redux dispatch
  const dispatch = useDispatch();

  // Handle post sharing
  const handleShare = async () => {
    try {
      const body = { userId: user._id };

      // Send share request to the server
      await axios.post(
        `${process.env.REACT_APP_API_URL}/share-post/${postId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      // Update global state, show success alert
      await dispatch(isUpdatedFalse());
      dispatch(showAlert());
      dispatch(
        defineAlertSettings({
          severity: "success",
          message: "shared post with success",
        })
      );
    } catch (error) {
      // Handle sharing error, show error alert
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
