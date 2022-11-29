import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
import {
  EditCommentContentForm,
  EditCommentFormInnerDiv,
} from "../styles/post.styles";
const EditCommentForm = (props) => {
  const { commentId, content, setEditing } = props;
  console.log("this are props", commentId, content);
  const dispatch = useDispatch();
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  const [updatedContent, setUpdatedContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const getToken = localStorage.getItem("authToken");
  console.log(updatedContent);
  const handleEditComment = async (e) => {
    try {
      e.preventDefault();
      const body = await { content: updatedContent };
      await axios.put(
        `${process.env.REACT_APP_API_URL}/comment-update/${commentId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      console.log("the comment was updated");
      await setErrorMessage("");
      await setEditing(false);
      await dispatch(isUpdatedFalse());
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
