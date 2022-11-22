import React, { useState, useContext, useEffect } from "react";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";

import { ViewCommentsList } from "../styles/post.styles";

const ViewComments = (props) => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  console.log(isUpdatedGlobal);
  const dispatch = useDispatch();

  const { listComments } = props;

  useEffect(() => {}, [isUpdatedGlobal]);

  return (
    <ViewCommentsList>
      {listComments.map((el) => (
        <Comment comment={el} key={el._id} />
      ))}
    </ViewCommentsList>
  );
};

export default ViewComments;
