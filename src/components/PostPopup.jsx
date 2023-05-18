import axios from "axios";
import React from "react";
import {
  PostPopupDiv,
  PostPopupIcon,
  AboveContentPostPopup,
} from "../styles/post.styles";
import { useDispatch } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobal";

const PostPopup = (props) => {
  const dispatch = useDispatch();
  const { postId, editing, setEditing, showPostPopup, setShowPostPopup } =
    props;

  const getToken = localStorage.getItem("authToken");

  const deletePost = async (postId) => {
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/post-delete/${postId}`,

      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );

    dispatch(isUpdatedFalse());
  };

  return (
    <PostPopupDiv>
      <button onClick={() => setShowPostPopup(!showPostPopup)}>
        <PostPopupIcon />
      </button>
      {showPostPopup && (
        <AboveContentPostPopup>
          <button
            onClick={() => {
              setEditing(!editing);
              setShowPostPopup(false);
            }}
          >
            edit
          </button>

          <button onClick={() => deletePost(postId)}>delete</button>
        </AboveContentPostPopup>
      )}
    </PostPopupDiv>
  );
};

export default PostPopup;
