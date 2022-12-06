import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import ReactTimeAgo from "react-time-ago";
import CommentPopup from "./CommentPopup";
import {
  EachCommentFromFeed,
  CommentInfoDiv,
  CommentUserInfoDiv,
  CommentUserInfoLink,
  CommentUserImg,
  EachCommentContent,
} from "../styles/post.styles";
import EditCommentForm from "./EditCommentForm";

const Comment = (props) => {
  const { comment } = props;
  const [editing, setEditing] = useState(false);
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const { user } = useContext(AuthContext);
  const createdAt = new Date(comment.createdAt).getTime();

  return (
    <EachCommentFromFeed>
      <CommentInfoDiv>
        <CommentUserInfoDiv>
          <CommentUserInfoLink to={`/in/${comment.user._id}`}>
            <CommentUserImg src={comment.user.imageUrl} alt="profile pic" />
            <p> {comment.user.name}</p>
          </CommentUserInfoLink>
          <ReactTimeAgo date={createdAt} locale="en-US" />
        </CommentUserInfoDiv>
        {user && user._id == comment.user._id && (
          <CommentPopup
            showCommentPopup={showCommentPopup}
            setShowCommentPopup={setShowCommentPopup}
            editing={editing}
            setEditing={setEditing}
            commentId={comment._id}
          />
        )}
      </CommentInfoDiv>
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
