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
import EditCommentForm from "./EditCommentForm";
import isUpdatedGlobal from "../redux/isUpdatedGlobal";
const Comment = (props) => {
  const { comment } = props;
  const [editing, setEditing] = useState(false);
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {}, [isUpdatedGlobal]);

  return (
    <EachCommentFromFeed>
      <CommentUserInfoDiv>
        <CommentUserInfoLink to={`/in/${comment.user._id}`}>
          <CommentUserImg src={comment.user.imageUrl} alt="profile pic" />
          <p> {comment.user.name}</p>
        </CommentUserInfoLink>
        {user && user._id == comment.user._id && (
          <CommentPopup
            showCommentPopup={showCommentPopup}
            setShowCommentPopup={setShowCommentPopup}
            editing={editing}
            setEditing={setEditing}
            commentId={comment._id}
          />
        )}
      </CommentUserInfoDiv>
      <div>
        {editing ? (
          <EditCommentForm
            commentId={comment._id}
            content={comment.content}
            setEditing={setEditing}
            setShowCommentPopup={setShowCommentPopup}
          />
        ) : (
          <EachCommentContent>{comment.content}</EachCommentContent>
        )}
      </div>
    </EachCommentFromFeed>
  );
};

export default Comment;
