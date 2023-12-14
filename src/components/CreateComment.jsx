import React, { useState } from "react";
import axios from "axios";
import {
  CreateCommentForm,
  CreateCommentLabel,
  SendPostIcon,
  CreateCommentButton
} from "../styles/comment.styles";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobalSlice";
const CreateComment = (props) => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { postId, setTogleComment } = props;
  const getToken = localStorage.getItem("authToken");
  const body = { content };

  const handleCreateComment = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-comment/${postId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      dispatch(isUpdatedFalse());
      setErrorMessage("");
      setContent("");
      await setTogleComment(true);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
      console.log(errorMessage);
    }
  };

  return (
    <CreateCommentForm onSubmit={handleCreateComment}>
      <CreateCommentLabel htmlFor={postId}>
        <textarea
          id={postId}
          value={content}
          placeholder="Add a comment here:"
          onChange={(e) => {
            setContent(e.target.value);
            setErrorMessage("");
          }}
        />
      </CreateCommentLabel>
      <CreateCommentButton type="submit" disabled={!content}>
        <SendPostIcon style={{ color: !content && "#b1ccce" }} />
      </CreateCommentButton>
      {errorMessage && <p>{errorMessage}</p>}
    </CreateCommentForm>
  );
};

export default CreateComment;
