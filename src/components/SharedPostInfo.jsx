import axios from "axios";
import React, { useContext } from "react";
import {
  SharedPostDiv,
  SharePopupDiv,
  PostPopupIcon,
  SharePopupButton,
  DeleteShareButton
} from "../styles/post.styles";
import { useDispatch } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobal";
import { AuthContext } from "../context/auth.context";

const SharedPostInfo = (props) => {
  const {
    shareId,
    userId,
    postId,
    showSharePopup,
    setShowSharePopup,
    userThatShared,
  } = props;
  const dispatch = useDispatch();
  const getToken = localStorage.getItem("authToken");
  const { isLoggedIn, user } = useContext(AuthContext);

  const deleteShare = async (shareId) => {
    try {
      const body = { userId, postId };
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/delete-share/${shareId}`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
          data: body,
        }
      );
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
