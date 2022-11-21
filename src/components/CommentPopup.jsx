import styled from "styled-components";
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
import { PostPopupIcon } from "../styles/post.styles";

const Above = styled.div`
  background-color: grey;
  position: absolute;
`;

const CommentPopup = (props) => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  console.log(isUpdatedGlobal);
  const dispatch = useDispatch();
  const { commentId } = props;
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const getToken = localStorage.getItem("authToken");

  const deleteComment = async (commentId) => {
    await axios.delete(
      `http://localhost:5005/comment/${commentId}`,

      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );
    await dispatch(isUpdatedFalse());
  };

  return (
    <div>
      <button onClick={() => setShowCommentPopup(!showCommentPopup)}>
        <PostPopupIcon />
      </button>

      {showCommentPopup && (
        <Above>
          <ul>
            <li>
              <button onClick={() => deleteComment(commentId)}>delete</button>
            </li>
            <li>edit</li>
          </ul>
        </Above>
      )}
    </div>
  );
};

export default CommentPopup;
