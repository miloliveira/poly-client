import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
import { ShareIcon, ShareButton } from "../styles/post.styles";
const SharePost = (props) => {
  const { postId } = props;
  const { user } = useContext(AuthContext);
  const getToken = localStorage.getItem("authToken");
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
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
      console.log("success!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ShareButton onClick={handleShare}>
      <ShareIcon></ShareIcon> share
    </ShareButton>
  );
};

export default SharePost;
