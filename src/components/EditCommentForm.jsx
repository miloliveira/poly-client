import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobalSlice";
import {
  EditCommentContentForm,
  EditCommentFormInnerDiv,
} from "../styles/comment.styles";

const EditCommentForm = (props) => {
  const { commentId, content, setEditing } = props;
  const dispatch = useDispatch();
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  const [updatedContent, setUpdatedContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const getToken = localStorage.getItem("authToken");

  const handleEditComment = async (e) => {
    try {
      e.preventDefault();
      const body = { content: updatedContent };
      await axios.put(
        `${process.env.REACT_APP_API_URL}/comment-update/${commentId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      setErrorMessage("");
      await setEditing(false);
      dispatch(isUpdatedFalse());
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };
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
