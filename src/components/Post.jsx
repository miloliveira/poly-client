import axios from "axios";
import React, { useState, useContext, useEffect, useRef } from "react";
import ReactTimeAgo from "react-time-ago";
import ViewComments from "../components/ViewComments";
import CreateComment from "../components/CreateComment";
import PostPopup from "./PostPopup";
import EditPostForm from "./EditPostForm";
import Follow from "./Follow";
import Unfollow from "./Unfollow";
import { useDispatch, useSelector } from "react-redux";
import { isUpdatedFalse, isUpdatedTrue } from "../redux/isUpdatedGlobal";
import { AuthContext } from "../context/auth.context";
import {
  PostFromFeedList,
  PostInfoDiv,
  PostUserInfoDiv,
  PostUserInfoLink,
  PostUserImg,
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
} from "../styles/post.styles";
const Post = (props) => {
  const createdComment = useRef(null);
  const { post } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [showPostPopup, setShowPostPopup] = useState(false);
  const [togleComment, setTogleComment] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const getToken = localStorage.getItem("authToken");
  const { isLoggedIn, user } = useContext(AuthContext);
  let followUserId = post.user._id;

  const isUpdatedGlobal = useSelector((state) => state.isUpdatedGlobal.value);

  const dispatch = useDispatch();
  const numberOfLikes = post.likes.length;
  const numberOfComments = post.comments.length;

  const createdAt = new Date(post.createdAt).getTime();

  const likePost = async (postId) => {
    if (isLiked === false) {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/post-like/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      await dispatch(isUpdatedFalse());
      await setIsLiked(true);
    } else if (isLiked === true) {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/post-dislike/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      await dispatch(isUpdatedFalse());
      await setIsLiked(false);
    }
  };

  const handleFollow = async () => {
    try {
      const body = await { followUserId };
      await axios.put(
        `${process.env.REACT_APP_API_URL}/in/${user._id}/follow`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      await dispatch(isUpdatedFalse());
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfLiked = () => {
    if (isLoggedIn && post.likes.includes(user._id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  const checkIfFollows = async () => {
    if (isLoggedIn) {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/in/${user._id}`
      );

      const currentUser = await response.data;

      if (currentUser.following.includes(followUserId)) {
        setIsFollowing(true);
      } else {
        setIsFollowing(false);
      }
    }
  };
  /*  const scrollToCreatedComment = () => {
    createdComment.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "end",
    });
  }; */
  useEffect(() => {
    checkIfLiked();
    checkIfFollows();
    dispatch(isUpdatedTrue());
  }, [isUpdatedGlobal]);

  return (
    <PostFromFeedList key={post._id}>
      <PostInfoDiv>
        <PostUserInfoDiv>
          <PostUserInfoLink to={`/in/${post.user._id}`}>
            <PostUserImg src={post.user.imageUrl} alt="profile pic" />
            <p>{post.user.name}</p>
          </PostUserInfoLink>
          <ReactTimeAgo date={createdAt} locale="en-US" />
        </PostUserInfoDiv>
        {isLoggedIn && user._id !== post.user._id && (
          <button onClick={() => handleFollow()}>
            {isFollowing ? <Unfollow /> : <Follow />}
          </button>
        )}
        {user && user._id == post.user._id && (
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

        {numberOfComments > 0 && numberOfComments == 1 ? (
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
      <EachPostButtonsDiv>
        {isLoggedIn && (
          <LikeButton onClick={() => likePost(post._id)}>
            {isLiked ? <DislikeBtnIcon /> : <LikeBtnIcon />}
          </LikeButton>
        )}
        {/*  <button
          onClick={() => {
            scrollToCreatedComment();
          }}
        >
          scroll
        </button> */}
        {isLoggedIn && (
          <TogleCommentBtn
            onClick={() => {
              setTogleComment(!togleComment);
            }}
          >
            {togleComment ? <CommentBtnIcon /> : <CommentBtnIcon />}
          </TogleCommentBtn>
        )}
        {isLoggedIn && (
          <CreateComment postId={post._id} setTogleComment={setTogleComment} />
        )}
      </EachPostButtonsDiv>
      {togleComment && (
        <>
          <ViewComments
            listComments={post.comments}
            togleComment={togleComment}
          />
        </>
      )}
    </PostFromFeedList>
  );
};

export default Post;
