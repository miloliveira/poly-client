// Dependencies
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import ReactTimeAgo from "react-time-ago";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobalSlice";
import { AuthContext } from "../context/auth.context";

// Components
import ViewComments from "../components/ViewComments";
import CreateComment from "../components/CreateComment";
import PostPopup from "./PostPopup";
import SharedPostInfo from "./SharedPostInfo";
import EditPostForm from "./EditPostForm";
import Follow from "./Follow";
import Unfollow from "./Unfollow";
import SharePost from "./SharePost";

// Style
import {
  PostFromFeedList,
  PostInfoDiv,
  PostUserInfoDiv,
  PostUserInfoLink,
  PostUserImg,
  NameAndTimeAgoDiv,
  ReactTimeAgoDiv,
  EachPostContentDiv,
  PostContent,
  PostImage,
  EachPostReactionsDiv,
  NumberOfCommentsP,
  NumberOfLikesP,
  EachPostButtonsDiv,
  LikeBtnIcon,
  DislikeBtnIcon,
  LikeButton,
  CommentBtnIcon,
  TogleCommentBtn,
  SharedPostDiv,
} from "../styles/post.styles";
const Post = (props) => {
  // Destructure props
  const { post } = props;

  // State and context variables
  const [isLiked, setIsLiked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [showPostPopup, setShowPostPopup] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [togleComment, setTogleComment] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const { isLoggedIn, user } = useContext(AuthContext);

  // Get authentication token from local storage
  const getToken = localStorage.getItem("authToken");

  // Redux state and dispatch
  const dispatch = useDispatch();
  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  // Extracting relevant data from the post object
  let followUserId = post.user._id;
  const numberOfLikes = post.likes.length;
  const numberOfComments = post.comments.length;
  const createdAt = new Date(post.createdAt).getTime();

  // Function to handle like/dislike post
  const likePost = async (postId) => {
    if (isLiked === false) {
      // Send request to the server
      await axios.put(
        `${process.env.REACT_APP_API_URL}/post-like/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      // Update global state and isLiked state
      await dispatch(isUpdatedFalse());
      await setIsLiked(true);
    } else if (isLiked === true) {
      // Send request to the server
      await axios.put(
        `${process.env.REACT_APP_API_URL}/post-dislike/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      // Update global state and isLiked state
      await dispatch(isUpdatedFalse());
      await setIsLiked(false);
    }
  };

  // Function to handle user follow
  const handleFollow = async () => {
    try {
      const body = await { followUserId };
      // Send request to the server
      await axios.put(
        `${process.env.REACT_APP_API_URL}/in/${user._id}/follow`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      // Update global state
      dispatch(isUpdatedFalse());
    } catch (error) {
      console.log(error);
    }
  };

  // Function to check if post is liked by the current session user
  const checkIfLiked = async () => {
    if (isLoggedIn && post.likes.includes(user._id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  // Function to check if post's user is followed by the current session user
  const checkIfFollows = async () => {
    try {
      if (user) {
        const userId = await user._id;
        // Send request to the server
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/check-follow/${userId}`,
          {}
        );

        if (isLoggedIn && response.data.following.includes(post.user._id)) {
          setIsFollowing(true);
        } else {
          setIsFollowing(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Use effects to perform initial checks and update state
  useEffect(() => {
    checkIfLiked();
    checkIfFollows();
    dispatch(isUpdatedTrue());
  }, [isUpdatedGlobal]);

  return (
    <PostFromFeedList key={post._id}>
      {post.isShared && (
        <SharedPostInfo
          userThatShared={post.shares[0].userId.name}
          postId={post._id}
          userId={post.shares[0].userId._id}
          shareId={post.shares[0]._id}
          showSharePopup={showSharePopup}
          setShowSharePopup={setShowSharePopup}
        />
      )}

      <PostInfoDiv>
        <PostUserInfoDiv>
          <PostUserInfoLink to={`/in/${post.user._id}`}>
            <PostUserImg src={post.user.imageUrl} alt="profile pic" />
            <NameAndTimeAgoDiv>
              <p>{post.user.name}</p>
              <ReactTimeAgoDiv>
                <ReactTimeAgo date={createdAt} locale="en-US" />
              </ReactTimeAgoDiv>
            </NameAndTimeAgoDiv>
          </PostUserInfoLink>
        </PostUserInfoDiv>
        {user && user._id !== post.user._id && (
          <button onClick={() => handleFollow()}>
            {isFollowing ? <Unfollow /> : <Follow />}
          </button>
        )}
        {user && user._id === post.user._id && (
          <PostPopup
            postId={post._id}
            editing={editing}
            setEditing={setEditing}
            showPostPopup={showPostPopup}
            setShowPostPopup={setShowPostPopup}
          />
        )}
      </PostInfoDiv>
      {editing ? (
        <EditPostForm
          postId={post._id}
          content={post.content}
          imageUrl={post.imageUrl}
          setEditing={setEditing}
        />
      ) : (
        <EachPostContentDiv>
          <PostContent>{post.content}</PostContent>

          {post.imageUrl && <PostImage src={post.imageUrl} alt="post pic" />}
        </EachPostContentDiv>
      )}

      <EachPostReactionsDiv>
        {numberOfLikes == 0 ? (
          <NumberOfLikesP>0 like this </NumberOfLikesP>
        ) : numberOfLikes > 1 ? (
          <NumberOfLikesP>{numberOfLikes} like this</NumberOfLikesP>
        ) : (
          <NumberOfLikesP>{numberOfLikes} likes this</NumberOfLikesP>
        )}

        {numberOfComments > 0 && numberOfComments === 1 ? (
          <NumberOfCommentsP
            onClick={() => {
              setTogleComment(!togleComment);
            }}
          >
            {numberOfComments} comment{" "}
          </NumberOfCommentsP>
        ) : (
          <NumberOfCommentsP
            onClick={() => {
              setTogleComment(!togleComment);
            }}
          >
            {numberOfComments} comments
          </NumberOfCommentsP>
        )}
      </EachPostReactionsDiv>
      {isLoggedIn && (
        <EachPostButtonsDiv>
          <LikeButton onClick={() => likePost(post._id)}>
            {isLiked ? <DislikeBtnIcon /> : <LikeBtnIcon />} like
          </LikeButton>
          <SharePost postId={post._id} />
          <TogleCommentBtn
            onClick={() => {
              setTogleComment(!togleComment);
            }}
          >
            {togleComment ? <CommentBtnIcon /> : <CommentBtnIcon />} comment
          </TogleCommentBtn>
        </EachPostButtonsDiv>
      )}
      {togleComment && (
        <>
          {isLoggedIn && (
            <CreateComment
              postId={post._id}
              setTogleComment={setTogleComment}
            />
          )}

          <ViewComments listComments={post.comments} />
        </>
      )}
    </PostFromFeedList>
  );
};

export default Post;
