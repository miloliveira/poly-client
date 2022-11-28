import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
import {
  CommentPopupDiv,
  PostPopupIcon,
  AboveContentCommentPopup,
} from "../styles/post.styles";

const CommentPopup = (props) => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  console.log(isUpdatedGlobal);
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
    await dispatch(isUpdatedFalse());
  };

  return (
    <CommentPopupDiv>
      <button onClick={() => setShowCommentPopup(!showCommentPopup)}>
        <PostPopupIcon />
      </button>

      {showCommentPopup && (
        <AboveContentCommentPopup>
          <li>
            <button
              onClick={() => {
                setEditing(!editing);
                setShowCommentPopup(false);
              }}
            >
              edit
            </button>
          </li>
          <li>
            <button onClick={() => deleteComment(commentId)}>delete</button>
          </li>
        </AboveContentCommentPopup>
      )}
    </CommentPopupDiv>
  );
};

export default CommentPopup;
