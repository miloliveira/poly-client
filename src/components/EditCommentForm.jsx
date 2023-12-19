// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobalSlice";
// Style
import {
  EditCommentContentForm,
  EditCommentFormInnerDiv,
} from "../styles/comment.styles";

const EditCommentForm = (props) => {
  // Destructure props
  const { commentId, content, setEditing } = props;
  // State variables
  const [updatedContent, setUpdatedContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  // Get authentication token from local storage
  const getToken = localStorage.getItem("authToken");

  // Redux dispatch
  const dispatch = useDispatch();

  // Function to handle comment editing
  const handleEditComment = async (e) => {
    try {
      // Prevent the default form submission
      e.preventDefault();
      // Request body with updated comment content
      const body = { content: updatedContent };
      // Send request to update the comment
      await axios.put(
        `${process.env.REACT_APP_API_URL}/comment-update/${commentId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      // Clear error message and update state to indicate comment update
      setErrorMessage("");
      await setEditing(false);
      dispatch(isUpdatedFalse());
    } catch (error) {
      // Handle errors and set error message
      setErrorMessage(error.response.data.errorMessage);
    }
  };
  // Effect to set initial state with comment content
  useEffect(() => {
    setUpdatedContent(content);
  }, []);

  return (
    <EditCommentContentForm onSubmit={handleEditComment}>
      <textarea
        value={updatedContent}
        onChange={(e) => {
          setUpdatedContent(e.target.value);
        }}
      />
      {errorMessage && <p>{errorMessage}</p>}
      <EditCommentFormInnerDiv>
        <button type="submit">save changes</button>
        <button
          onClick={() => {
            setEditing(false);
          }}
        >
          cancel
        </button>
      </EditCommentFormInnerDiv>
    </EditCommentContentForm>
  );
};

export default EditCommentForm;
