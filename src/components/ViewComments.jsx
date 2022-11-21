import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import CommentPopup from "./CommentPopup";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue} from "../redux/isUpdatedGlobal";

import {
  ViewCommentsList,
  EachCommentFromFeed,
  CommentUserInfoDiv,
  CommentUserInfoLink,
  CommentUserImg,
  EachCommentContent,
  PostPopupIcon
} from "../styles/post.styles";

const ViewComments = (props) => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  console.log(isUpdatedGlobal);
  const dispatch = useDispatch();

  const { listComments } = props;
  
  const { user } = useContext(AuthContext);

  useEffect(() => {}, [isUpdatedGlobal]);

  return (
    <ViewCommentsList>
      {listComments.map((el) => (
        <EachCommentFromFeed key={el._id}>
          <CommentUserInfoDiv>
            <CommentUserInfoLink to={`/in/${el.user._id}`}>
              <CommentUserImg src={el.user.imageUrl} alt="profile pic" />
              <p> {el.user.username}</p>
            </CommentUserInfoLink>
            {user && user._id == el.user._id && (
              <CommentPopup
                commentId={el._id}
               
              />
            )}
          </CommentUserInfoDiv>

          <div>
            <EachCommentContent>{el.content}</EachCommentContent>
          </div>
        </EachCommentFromFeed>
      ))}
    </ViewCommentsList>
  );
};

export default ViewComments;
