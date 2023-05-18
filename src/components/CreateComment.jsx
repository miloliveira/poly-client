import React, { useState } from "react";
import axios from "axios";
import { CreateCommentForm, SendPostIcon } from "../styles/post.styles";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobal";
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
      await dispatch(isUpdatedFalse());
      await setErrorMessage("");
      await setContent("");
      await setTogleComment(true);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
      console.log(errorMessage);
    }
  };

  return (
    <CreateCommentForm onSubmit={handleCreateComment}>
      <textarea
        value={content}
        placeholder="Add a comment here:"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type="submit">
        <SendPostIcon />
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </CreateCommentForm>
  );
};

export default CreateComment;
