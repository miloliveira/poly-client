import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import CreatePost from "../components/CreatePost";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext } from "../context/auth.context";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
import {
  FeedPageDiv,
  FeedPostList,
  FeedContentDiv,
  FeedLeftContentDiv,
  FeedMainContentDiv,
} from "../styles/post.styles";

const Feed = () => {
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  /* const [windowSize, setWindowSize] = useState(getWindowSize()); */
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

  //SORTING THE ALLPOSTS ARRAY BY THE DATE OF CREATEDAT OF EACH POST - SO THE MOST RECENT ONES SHOW UP FIRST
  allPosts.sort((x, y) => +new Date(y.createdAt) - +new Date(x.createdAt));
  //console.log("this is it", allPosts);

  //tracking window innerWidth
  /* function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  } */

  useEffect(() => {
    getPosts();
    /*  function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    }; */
  }, [isUpdatedGlobal]);

  return (
    <FeedPageDiv>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <FeedContentDiv>
          {/* {windowSize.innerWidth > 1200 && (
          <FeedLeftContentDiv>
            <p>Hello</p>
            <p>This is the left side content</p>
            <p>bla bla bla</p>
          </FeedLeftContentDiv>
        )} */}

          <FeedMainContentDiv>
            {isLoggedIn && <CreatePost userId={user._id} />}

            <FeedPostList>
              {allPosts &&
                allPosts.map((post) => {
                  return <Post key={post._id} post={post} />;
                })}
            </FeedPostList>
          </FeedMainContentDiv>
        </FeedContentDiv>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </FeedPageDiv>
  );
};

export default Feed;
