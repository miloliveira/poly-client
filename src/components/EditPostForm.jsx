import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
import {
  EditPostContentForm,
  EditPostFormInnerDiv,
} from "../styles/post.styles";

const EditPostForm = (props) => {
  const { postId, content, setEditing } = props;
  const dispatch = useDispatch();

  const [updatedContent, setUpdatedContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const getToken = localStorage.getItem("authToken");

  const handleEditPost = async (e) => {
    try {
      e.preventDefault();
      const body = await { content: updatedContent };
      await axios.put(
        `${process.env.REACT_APP_API_URL}/post-update/${postId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      console.log("the post was updated");
      await setErrorMessage("");
      await dispatch(isUpdatedFalse());
      await setEditing(false);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };
  useEffect(() => {
    setUpdatedContent(content);
  }, []);
  return (
    <EditPostContentForm onSubmit={handleEditPost}>
      <textarea
        value={updatedContent}
        onChange={(e) => {
          setUpdatedContent(e.target.value);
        }}
      />
      {errorMessage && <p>{errorMessage}</p>}
      <EditPostFormInnerDiv>
        <button type="submit">save changes</button>

        <button
          onClick={() => {
            setEditing(false);
          }}
        >
          cancel
        </button>
      </EditPostFormInnerDiv>
    </EditPostContentForm>
  );
};

export default EditPostForm;
