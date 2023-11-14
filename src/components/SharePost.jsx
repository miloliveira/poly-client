import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { ShareIcon, ShareButton } from "../styles/post.styles";
const SharePost = (props) => {
  const { postId } = props;
  const { user } = useContext(AuthContext);
  const getToken = localStorage.getItem("authToken");

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
