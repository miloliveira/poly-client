import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobal";
import service from "../api/service";
import {
  EditPostContentForm,
  EditPostFormInnerDiv,
} from "../styles/post.styles";

const EditPostForm = (props) => {
  const { postId, content, setEditing } = props;
  const dispatch = useDispatch();
  const [isUploading, setIsUploading] = useState(false);
  const [updatedContent, setUpdatedContent] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const getToken = localStorage.getItem("authToken");

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    setIsUploading(true);

    uploadData.append("imageUrl", e.target.files[0]);

    service
      .uploadImage(uploadData)
      .then((response) => {
        setIsUploading(false);
        setimageUrl(response.fileUrl);
      })
      .catch((error) => console.log(error));
  };

  const handleEditPost = async (e) => {
    try {
      e.preventDefault();
      if (isUploading) {
        alert("Image still upploading");
        return;
      }
      let body;

      if (imageUrl) {
        body = { content: updatedContent, imageUrl };
      } else {
        body = { content: updatedContent };
      }
      await axios.put(
        `${process.env.REACT_APP_API_URL}/post-update/${postId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      setErrorMessage("");
      dispatch(isUpdatedFalse());
      await setEditing(false);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };
  useEffect(() => {
    setUpdatedContent(content);
    setimageUrl(imageUrl);
  }, []);
  return (
    <EditPostContentForm onSubmit={handleEditPost}>
      <textarea
        value={updatedContent}
        onChange={(e) => {
          setUpdatedContent(e.target.value);
        }}
      />
      <input
        type="file"
        name="imageUrl"
        onChange={(e) => handleFileUpload(e)}
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
