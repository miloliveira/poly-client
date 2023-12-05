import React, { useEffect } from "react";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import {
  ViewCommentsList,
  CommentsListInnerDiv,
} from "../styles/comment.styles";

const ViewComments = (props) => {
  const { listComments } = props;

  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  useEffect(() => {}, [isUpdatedGlobal]);

  return (
    <ViewCommentsList>
      {listComments.length < 1 ? (
        <p> No comments to show</p>
      ) : (
        <CommentsListInnerDiv>
          {listComments &&
            listComments.map((el, index) => (
              <Comment comment={el} key={index} />
            ))}
        </CommentsListInnerDiv>
      )}
    </ViewCommentsList>
  );
};

export default ViewComments;
