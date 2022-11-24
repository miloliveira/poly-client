import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import CommentPopup from "./CommentPopup";
import {
  EachCommentFromFeed,
  CommentUserInfoDiv,
  CommentUserInfoLink,
  CommentUserImg,
  EachCommentContent,
} from "../styles/post.styles";
const Comment = (props) => {
  const { comment } = props;

  const { user } = useContext(AuthContext);
  return (
    <EachCommentFromFeed>
      <CommentUserInfoDiv>
        <CommentUserInfoLink to={`/in/${comment.user._id}`}>
          <CommentUserImg src={comment.user.imageUrl} alt="profile pic" />
          <p> {comment.user.name}</p>
        </CommentUserInfoLink>
        {user && user._id == comment.user._id && (
          <CommentPopup commentId={comment._id} />
        )}
      </CommentUserInfoDiv>
      <div>
        <EachCommentContent>{comment.content}</EachCommentContent>
      </div>
    </EachCommentFromFeed>
  );
};

export default Comment;
