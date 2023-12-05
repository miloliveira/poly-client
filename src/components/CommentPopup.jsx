import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobal";
import {
  CommentPopupDiv,
  PostPopupIcon,
  AboveContentCommentPopup,
} from "../styles/comment.styles";

const CommentPopup = (props) => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  const dispatch = useDispatch();

  const {
    commentId,
    editing,
    setEditing,
    showCommentPopup,
    setShowCommentPopup,
  } = props;

  const getToken = localStorage.getItem("authToken");

  const deleteComment = async (commentId) => {
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/comment/${commentId}`,

      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );
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
