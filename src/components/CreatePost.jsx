// Dependencies
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import service from "../api/service";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobalSlice";
// Style
import {
  CreatePostDiv,
  CreatePostUserImg,
  CreatePostForm,
  CreatePostLabel,
} from "../styles/post.styles";
const CreatePost = (props) => {
  // Destructure props
  const { userId } = props;
  // Ref to the image input
  const imageInputRef = useRef();
  // State variables
  const [currentUser, setCurrentUser] = useState({});
  const [content, setContent] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  // Redux dispatch
  const dispatch = useDispatch();
  // Get authentication token from local storage
  const getToken = localStorage.getItem("authToken");
  // Function to handle file upload
  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    setIsUploading(true);
    uploadData.append("imageUrl", e.target.files[0]);
    // Upload image using the service
    service
      .uploadImage(uploadData)
      .then((response) => {
        setIsUploading(false);
        setimageUrl(response.fileUrl);
      })
      .catch((error) => console.log(error));
  };
  // Function to handle post creation
  const handleCreatePost = async (e) => {
    try {
      e.preventDefault();
      if (isUploading) {
        await alert("image still uploading");
        return;
      }
      let body;

      if (imageUrl) {
        body = {
          content,
          imageUrl,
        };
      } else {
        body = {
          content,
        };
      }
      // Send request to create a new post
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-post/${userId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      // Reset form fields and update state
      setContent("");
      setErrorMessage("");
      dispatch(isUpdatedFalse());
      imageInputRef.current.value = "";
    } catch (error) {
      // Handle errors and set error message
      setErrorMessage(error.response.data.errorMessage);
    }
  };
  // Function to get user data
  const getUser = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/in/${userId}`
    );
    setCurrentUser(response.data);
  };
  // Effect to fetch user data on component mount
  useEffect(() => {
    getUser();
  }, []);

  return (
    <CreatePostDiv>
      <Link to={`/in/${userId}`}>
        <CreatePostUserImg src={currentUser.imageUrl} alt="profile pic" />
      </Link>

      <CreatePostForm onSubmit={handleCreatePost}>
        <CreatePostLabel htmlFor="post-content">
          <textarea
            id="post-content"
            placeholder="Share your thoughts here:"
            value={content}
            name="imageUrl"
            onChange={(e) => {
              setContent(e.target.value);
              setErrorMessage("");
            }}
          />
        </CreatePostLabel>
        <CreatePostLabel htmlFor="post-imageUrl">
          <input
            id="post-imageUrl"
            type="file"
            name="imageUrl"
            onChange={(e) => handleFileUpload(e)}
            ref={imageInputRef}
          />
        </CreatePostLabel>

        <button
          type="submit"
          disabled={!content}
          style={{ backgroundColor: !content && "#b1ccce" }}
        >
          Post
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </CreatePostForm>
    </CreatePostDiv>
  );
};

export default CreatePost;
