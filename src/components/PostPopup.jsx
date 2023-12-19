// Dependencies
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobalSlice";

// Style
import {
  PostPopupDiv,
  PostPopupIcon,
  AboveContentPostPopup,
} from "../styles/post.styles";

const PostPopup = (props) => {
  // Destructure props
  const { postId, editing, setEditing, showPostPopup, setShowPostPopup } =
    props;

  // Redux dispatch local storage
  const getToken = localStorage.getItem("authToken");

  const dispatch = useDispatch();

  // Handle post deletion
  const deletePost = async (postId) => {
    // Send delete request to the server
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/post-delete/${postId}`,

      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );
    // Update global state
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
