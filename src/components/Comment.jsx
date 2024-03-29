// Dependencies
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import ReactTimeAgo from "react-time-ago";
// Components
import CommentPopup from "./CommentPopup";
import EditCommentForm from "./EditCommentForm";
// Style
import {
  EachCommentFromFeed,
  CommentInfoDiv,
  CommentUserInfoDiv,
  CommentUserInfoLink,
  CommentUserInfoLinkInnerDiv,
  CommentUserImg,
  EachCommentContent,
  ReactTimeAgoDiv,
} from "../styles/comment.styles";

const Comment = (props) => {
  // Destructure props
  const { comment } = props;
  // State and context variables
  const [editing, setEditing] = useState(false);
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const { user } = useContext(AuthContext);
  const createdAt = new Date(comment.createdAt).getTime();

  return (
    <EachCommentFromFeed key={comment._id}>
      <CommentInfoDiv>
        <CommentUserInfoDiv>
          <CommentUserInfoLink to={`/in/${comment.user._id}`}>
            <CommentUserInfoLinkInnerDiv>
              <CommentUserImg src={comment.user.imageUrl} alt="profile pic" />
              <p> {comment.user.name}</p>
            </CommentUserInfoLinkInnerDiv>
            <ReactTimeAgoDiv>
              <ReactTimeAgo date={createdAt} locale="en-US" />
            </ReactTimeAgoDiv>
          </CommentUserInfoLink>
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
