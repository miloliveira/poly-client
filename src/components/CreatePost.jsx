import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import service from "../api/service";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse } from "../redux/isUpdatedGlobal";
import {
  CreatePostDiv,
  CreatePostUserImg,
  CreatePostForm,
  CreatePostLabel,
} from "../styles/post.styles";
const CreatePost = (props) => {
  const imageInputRef = useRef();
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({});
  const [content, setContent] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { userId } = props;
  const getToken = localStorage.getItem("authToken");

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    setIsUploading(true);
    uploadData.append("imageUrl", e.target.files[0]);
    service
      .uploadImage(uploadData)
      .then((response) => {
        setIsUploading(false);
        console.log("this is the response of upploading", response);
        setimageUrl(response.fileUrl);
      })
      .catch((error) => console.log(error));
  };

  const handleCreatePost = async (e) => {
    try {
      e.preventDefault();
      if (isUploading) {
        await alert("image still uploading");
        return;
      }
      let body;

      if (imageUrl) {
        body = await {
          content,
          imageUrl,
        };
      } else {
        body = await {
          content,
        };
      }
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-post/${userId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      console.log(response);
      setContent("");
      setErrorMessage("");
      dispatch(isUpdatedFalse());
      imageInputRef.current.value = "";
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  const getUser = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/in/${userId}`
    );
    setCurrentUser(response.data);
  };
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

        <button type="submit">Post</button>
        {errorMessage && <p>{errorMessage}</p>}
      </CreatePostForm>
    </CreatePostDiv>
  );
};

export default CreatePost;
