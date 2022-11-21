import styled from "styled-components";
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { PostPopupIcon } from "../styles/post.styles";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
const Above = styled.div`
  background-color: grey;
  position: absolute;
`;

const PostPopup = (props) => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  console.log(isUpdatedGlobal);
  const dispatch = useDispatch();
  const { postId } = props;
  const [showPostPopup, setShowPostPopup] = useState(false);
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
  useEffect(() => {}, [isUpdatedGlobal]);
  return (
    <div>
      <button onClick={() => setShowPostPopup(!showPostPopup)}>
        <PostPopupIcon />
      </button>

      {showPostPopup && (
        <Above>
          <ul>
            <li>
              <button onClick={() => deletePost(postId)}>Delete</button>
            </li>
            <li>edit</li>
          </ul>
        </Above>
      )}
    </div>
  );
};

export default PostPopup;
