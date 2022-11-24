import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const getToken = localStorage.getItem("authToken");

  const getPost = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/post/${postId}`
      );
      await setContent(response.data.content);
      await setErrorMessage("");
      console.log("this is this posts content", content);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  const handleEditPost = async (e) => {
    try {
      e.preventDefault();
      const body = await { content };
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
      await navigate("/feed");
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <form onSubmit={handleEditPost}>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">save changes</button>
        <button>
          <Link to={"/feed"}>cancel</Link>
        </button>
      </form>
    </div>
  );
};

export default EditPost;
