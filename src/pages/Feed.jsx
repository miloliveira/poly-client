import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreatePost from "../components/CreatePost";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext } from "../context/auth.context";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedTrue } from "../redux/isUpdatedGlobal";
import {
  FeedPageDiv,
  FeedPostList,
  FeedContentDiv,
  FeedMainContentDiv,
  HomeLink,
} from "../styles/post.styles";

const Feed = () => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn, user } = useContext(AuthContext);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts`
      );
      await setAllPosts(response.data);
      setIsLoading(false);
      dispatch(isUpdatedTrue());
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    getPosts();
  }, [isUpdatedGlobal]);

  return (
    <FeedPageDiv>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <FeedMainContentDiv>
          {isLoggedIn ? (
            <CreatePost userId={user._id} />
          ) : (
            <h3>
              Want to share your insights? Login to your account or join our
              community <HomeLink to={`/`}>here</HomeLink>
            </h3>
          )}

          <FeedPostList>
            {allPosts &&
              allPosts.map((post) => {
                return <Post key={post._id} post={post} />;
              })}
          </FeedPostList>
        </FeedMainContentDiv>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </FeedPageDiv>
  );
};

export default Feed;
