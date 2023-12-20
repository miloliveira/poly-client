// Dependencies
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import Comment from "./Comment";

// Style
import {
  ViewCommentsList,
  CommentsListInnerDiv,
} from "../styles/comment.styles";

const ViewComments = (props) => {
  // State and context variables
  const { listComments } = props;

  // Redux state
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  useEffect(() => {}, [isUpdatedGlobal]);

  return (
    <ViewCommentsList>
      {listComments.length < 1 ? (
        <p> No comments to show</p>
      ) : (
        <CommentsListInnerDiv>
          {listComments &&
            listComments.map((el) => <Comment comment={el} key={el._id} />)}
        </CommentsListInnerDiv>
      )}
    </ViewCommentsList>
  );
};

export default ViewComments;
