// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobalSlice";
import service from "../api/service";
// Style
import {
  EditPostContentForm,
  EditPostFormInnerDiv,
} from "../styles/post.styles";

const EditPostForm = (props) => {
  // Destructure props
  const { postId, content, setEditing } = props;
  // State variables
  const [isUploading, setIsUploading] = useState(false);
  const [updatedContent, setUpdatedContent] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  // Get authentication token from local storage
  const getToken = localStorage.getItem("authToken");
  // Redux dispatch
  const dispatch = useDispatch();

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    setIsUploading(true);

    uploadData.append("imageUrl", e.target.files[0]);
    // Using a service to upload the image
    service
      .uploadImage(uploadData)
      .then((response) => {
        setIsUploading(false);
        setimageUrl(response.fileUrl);
      })
      .catch((error) => console.log(error));
  };
  // Function to handle post editing
  const handleEditPost = async (e) => {
    try {
      // Prevent the default form submission
      e.preventDefault();
      // Check if image is still uploading
      if (isUploading) {
        alert("Image still upploading");
        return;
      }
      // Create the request body based on whether a new image is uploaded
      let body;
      if (imageUrl) {
        body = { content: updatedContent, imageUrl };
      } else {
        body = { content: updatedContent };
      }
      // Send request to update the post
      await axios.put(
        `${process.env.REACT_APP_API_URL}/post-update/${postId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      // Clear error message and update global state to indicate post update
      setErrorMessage("");
      dispatch(isUpdatedFalse());
      await setEditing(false);
    } catch (error) {
      // Handle errors and set error message
      setErrorMessage(error.response.data.errorMessage);
    }
  };
  // Effect to set initial state with post content and image URL
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
