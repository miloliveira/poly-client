// Dependencies
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedTrue } from "../redux/isUpdatedGlobalSlice";

// Components
import CreatePost from "../components/CreatePost";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertPopup from "../components/AlertPopup";
import Post from "../components/Post";

// Style
import {
  FeedPageDiv,
  FeedPostList,
  FeedMainContentDiv,
  HomeLink,
} from "../styles/post.styles";

const Feed = () => {
  // State and context variables
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn, user } = useContext(AuthContext);
  const [sortedPosts, setsortedPosts] = useState([]);

  // Redux state and dispatch
  const dispatch = useDispatch();
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  const alertOnScreen = useSelector(
    (state) => state.alertOnScreen.showAlertOnScreen.value
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          // Function fetching all posts.
          const postsResponse = await axios.get(
            `${process.env.REACT_APP_API_URL}/posts`
          );
          // Function fetching the posts already shared by the current session user
          const sharedPostsResponse = await axios.get(
            `${process.env.REACT_APP_API_URL}/check-share/${user._id}`
          );
          // Updating the updatedPosts Array with sortedDate key.
          const updatedPosts = postsResponse.data.map((post) => {
            const share = sharedPostsResponse.data.shares.find(
              (share) => share.postId === post._id.toString()
            );
            const sortedDate = share
              ? new Date(share.createdAt)
              : new Date(post.createdAt);
            return { ...post, sortedDate };
          });
          // sorting the updated posts array according to the sortedDate
          updatedPosts.sort(
            (first, second) =>
              new Date(second.sortedDate) - new Date(first.sortedDate)
          );

          setsortedPosts(updatedPosts);
        } else {
          // Function fetching all posts.
          const postsResponse = await axios.get(
            `${process.env.REACT_APP_API_URL}/posts`
          );
          setsortedPosts(postsResponse.data);
        }
        setIsLoading(false);
        dispatch(isUpdatedTrue());
      } catch (error) {
        setErrorMessage(error.response.data.errorMessage);
        console.log(errorMessage);
      }
    };

    fetchData();
  }, [isUpdatedGlobal, dispatch, errorMessage]);

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
            {sortedPosts &&
              sortedPosts.map((post) => {
                return <Post key={post._id} post={post} />;
              })}
          </FeedPostList>

          {alertOnScreen && <AlertPopup />}
        </FeedMainContentDiv>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </FeedPageDiv>
  );
};

export default Feed;
