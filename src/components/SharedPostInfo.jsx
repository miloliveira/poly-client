// Dependencies
import React, { useContext } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobalSlice";
import { AuthContext } from "../context/auth.context";

// Style
import {
  SharedPostDiv,
  SharePopupDiv,
  PostPopupIcon,
  SharePopupButton,
  DeleteShareButton,
} from "../styles/post.styles";

const SharedPostInfo = (props) => {
  // Destructure props
  const {
    shareId,
    userId,
    postId,
    showSharePopup,
    setShowSharePopup,
    userThatShared,
  } = props;

  // Redux dispatch and authentication context
  const dispatch = useDispatch();
  const getToken = localStorage.getItem("authToken");
  const { isLoggedIn, user } = useContext(AuthContext);

  // Handle share deletion
  const deleteShare = async (shareId) => {
    try {
      const body = { userId, postId };

      // Send delete request to the server
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/delete-share/${shareId}`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
          data: body,
        }
      );
      // Update global state
      await dispatch(isUpdatedFalse());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SharedPostDiv>
      <p>{userThatShared} shared this</p>

      {isLoggedIn && user._id === userId && (
        <SharePopupDiv>
          {showSharePopup && (
            <DeleteShareButton
              onClick={() => {
                deleteShare(shareId);
              }}
            >
              delete share
            </DeleteShareButton>
          )}
          <SharePopupButton
            onClick={() => {
              setShowSharePopup(!showSharePopup);
            }}
          >
            <PostPopupIcon />
          </SharePopupButton>
        </SharePopupDiv>
      )}
    </SharedPostDiv>
  );
};

export default SharedPostInfo;
