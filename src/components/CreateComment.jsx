// Dependencies
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobalSlice";
// Style
import {
  CreateCommentForm,
  CreateCommentLabel,
  SendPostIcon,
  CreateCommentButton,
} from "../styles/comment.styles";

const CreateComment = (props) => {
  // Destructure props
  const { postId, setTogleComment } = props;
  // State variables
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  // Redux dispatch
  const dispatch = useDispatch();
  // Get authentication token from local storage
  const getToken = localStorage.getItem("authToken");

  // Function to handle comment creation
  const handleCreateComment = async (e) => {
    try {
      // Prevent the default form submission
      e.preventDefault();
      const body = { content };
      // Send request to create a new comment
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-comment/${postId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      // Update global state, clear error message, reset form fields and update state
      dispatch(isUpdatedFalse());
      setErrorMessage("");
      setContent("");
      await setTogleComment(true);
    } catch (error) {
      // Handle errors and set error message
      setErrorMessage(error.response.data.errorMessage);
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
