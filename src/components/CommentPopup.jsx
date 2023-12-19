// Dependencies
import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobalSlice";
// Style
import {
  CommentPopupDiv,
  PostPopupIcon,
  AboveContentCommentPopup,
} from "../styles/comment.styles";

const CommentPopup = (props) => {
  // Destructure props
  const {
    commentId,
    editing,
    setEditing,
    showCommentPopup,
    setShowCommentPopup,
  } = props;
  // Redux dispatch
  const dispatch = useDispatch();
  // Get authentication token from local storage
  const getToken = localStorage.getItem("authToken");

  // Function to handle comment deletion
  const deleteComment = async (commentId) => {
    // Send request to delete the comment
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/comment/${commentId}`,
      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );
    // Update global state
    dispatch(isUpdatedFalse());
  };

  return (
    <CommentPopupDiv>
      <button onClick={() => setShowCommentPopup(!showCommentPopup)}>
        <PostPopupIcon />
      </button>

      {showCommentPopup && (
        <AboveContentCommentPopup>
          <button
            onClick={() => {
              setEditing(!editing);
              setShowCommentPopup(false);
            }}
          >
            edit
          </button>

          <button onClick={() => deleteComment(commentId)}>delete</button>
        </AboveContentCommentPopup>
      )}
    </CommentPopupDiv>
  );
};

export default CommentPopup;
