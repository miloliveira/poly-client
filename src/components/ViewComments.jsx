import React from "react";
import Comment from "./Comment";
import { ViewCommentsList, CommentsListInnerDiv } from "../styles/post.styles";

const ViewComments = (props) => {
  const { listComments } = props;

  return (
    <ViewCommentsList>
      {listComments.length < 1 ? (
        <p> No comments to show</p>
      ) : (
        <CommentsListInnerDiv>
          {listComments.map((el) => (
            <Comment comment={el} key={el._id} />
          ))}
        </CommentsListInnerDiv>
      )}
    </ViewCommentsList>
  );
};

export default ViewComments;
