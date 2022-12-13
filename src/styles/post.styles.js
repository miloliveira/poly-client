import styled from "styled-components";
import { Link } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";

//styled icons
export const SendPostIcon = styled(SendIcon)`
  color: #497174;
`;

export const PostPopupIcon = styled(MenuIcon)`
  color: #497174;
`;

export const CommentBtnIcon = styled(InsertCommentIcon)`
  color: #497174;
`;

export const LikeBtnIcon = styled(ThumbUpAltIcon)`
  color: #497174;
`;
export const DislikeBtnIcon = styled(ThumbDownAltIcon)`
  color: #497174;
`;

//styled components

export const FeedPageDiv = styled.div`
  height: 100vh;
  background-color: #eff5f5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 30px;
`;
export const FeedContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 60%;
`;

export const FeedLeftContentDiv = styled.div`
  width: 20%;
  background-color: #d6e4e5;
`;
export const FeedMainContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

export const CreatePostDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const CreatePostUserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  object-fit: cover;
  object-position: 20% 10%;
  border-radius: 100px;
  margin-right: 10px;
`;

export const CreatePostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  textarea {
    width: 100%;
    height: 50px;
    border: 1px solid #d6e4e5;
    border-radius: 25px;
    background-color: white;
    padding: 10px 20px 0px 20px;

    outline: none;
    resize: none;
  }
  textarea::-webkit-scrollbar {
    display: none;
  }
  input {
    cursor: pointer;
    width: 100%;
  }

  input::file-selector-button {
    color: #497174;
    background-color: #eff5f5;
    border: 1px solid #d6e4e5;
    border-radius: 15px;
    cursor: pointer;
  }

  button {
    background-color: #497174;
    color: white;
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 15px;
    padding: 5px 10px;
    margin-top: 5px;
  }
`;
export const FeedPostList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: #eff5f5;
  width: 100%;
  height: auto;
  padding-bottom: 20px;
`;

export const PostFromFeedList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-bottom: 10px;
  border: 1px solid #d6e4e5;
  border-radius: 15px;
`;
export const PostInfoDiv = styled.div`
  background-color: #eff5f5;
  border-radius: 15px;
  border-bottom: 2px solid #eff5f5;
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: #eff5f5;
    color: #497174;
    border: none;
  }
`;
export const FollowBtnString = styled.p`
  margin: 0;
`;
export const PostUserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 70%;
`;

//post popup component
export const PostPopupDiv = styled.div`
  position: relative;

  button {
    border: none;
  }
`;

export const AboveContentPostPopup = styled.div`
  background-color: transparent;
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  button {
    background-color: #497174;
    color: white;
    width: 100%;
    border-radius: 5px;
    text-decoration: none;
  }
  button:hover {
    border: 2px solid white;
  }
`;
export const AboveContentPostPopupLink = styled(Link)`
  background-color: #497174;
  color: white;
  width: 100%;
  border-radius: 5px;
  text-decoration: none;

  text-align: center;
  &:hover {
    border: 2px solid white;
    color: white;
  }
`;

//
export const PostUserInfoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 40px;
  text-decoration: none;

  align-items: center;
  color: black;
  p {
    position: relative;
    margin: 0px 10px;
    text-decoration: none;
    color: black;
    width: auto;
    text-align: center;
    font-weight: bold;
  }
`;
export const PostUserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  object-fit: cover;
  object-position: 20% 10%;
  border-radius: 100px;
`;

export const EachPostContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
`;

export const PostContent = styled.p`
  margin: 0px;
  padding: 10px;
  width: 100%;
  height: auto;
  background-color: white;
  word-wrap: break-word;
`;
export const PostImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const EachPostReactionsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  padding: 0px;
  border-radius: 10px;
  border-bottom: 2px solid #eff5f5;
`;
export const NumberOfCommentsP = styled.p`
  margin-right: 10px;
`;
export const NumberOfLikesP = styled.p`
  margin-left: 10px;
`;

export const EachPostButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
  margin: 0;
  background-color: white;
`;
export const LikeButton = styled.button`
  border: none;
  background-color: white;
`;
export const TogleCommentBtn = styled.button`
  background-color: white;
  border: none;
`;

export const CreateCommentForm = styled.form`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  textarea {
    width: 90%;
    height: 40px;

    background-color: white;

    border: 1px solid #d6e4e5;
    border-radius: 25px;
    padding: 10px 20px 0px 20px;
    outline: none;
    resize: none;
  }
  textarea::-webkit-scrollbar {
    display: none;
  }
  textarea:focus {
    outline: 0;
  }
  button {
    background-color: white;

    border: none;

    margin-top: 5px;
  }
`;

export const ViewCommentsList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  background-color: white;
  align-items: space-around;
  border-radius: 10px;
`;
export const CommentsListInnerDiv = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`;

export const EachCommentFromFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #eff5f5;
  border-radius: 10px;
  padding-top: 10px;
  margin-top: 10px;
`;
export const CommentInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CommentUserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  background-color: #eff5f5;
  padding-left: 10px;
`;
//Comment Popup component
export const CommentPopupDiv = styled.div`
  position: relative;
  margin-right: 20px;
  button {
    border: none;
  }
`;
export const AboveContentCommentPopup = styled.div`
  background-color: transparent;
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  button {
    background-color: #497174;
    color: white;
    width: 100%;
    border-radius: 5px;
  }
  button:hover {
    border: 2px solid white;
  }
`;
//
export const CommentUserInfoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 25px;
  text-decoration: none;
  padding: 0;
  p {
    margin: 0px 10px;
    text-decoration: none;
    color: black;
    width: auto;
    text-align: center;
    font-weight: bold;
  }
`;

export const CommentUserImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  object-fit: cover;
  object-position: 20% 10%;
  border-radius: 100px;
`;

export const EachCommentContent = styled.p`
  padding: 5px 20px;
  min-height: 30px;
  width: 100%;
  background-color: #eff5f5;
  word-wrap: break-word;
`;
//edit comments
export const EditCommentContentForm = styled.form`
  padding: 5px 15px;
  background-color: #eff5f5;
  display: flex;
  flex-direction: column;
  textarea {
    border-radius: 15px;
    width: 100%;
    min-height: 50px;
    padding: 5px 20px;
    background-color: white;
    border: 1px solid #d6e4e5;
    outline: none;
    resize: none;
  }

  textarea::-webkit-scrollbar {
    display: none;
  }
`;

export const EditCommentFormInnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  button {
    border: none;
    background-color: #497174;
    color: white;
    border-radius: 5px;
    padding: 1px 5px;
  }
`;

//edit posts page

export const EditPostContentForm = styled.form`
  padding: 5px 15px;
  background-color: #eff5f5;
  display: flex;
  flex-direction: column;
  textarea {
    height: 150px;
    width: 100%;
    padding: 10px 20px;
    background-color: white;
    border: 1px solid #d6e4e5;
    border-radius: 15px;
    outline: none;
    resize: none;
  }

  textarea::-webkit-scrollbar {
    display: none;
  }
`;

export const EditPostFormInnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  button {
    border: none;
    background-color: #497174;
    color: white;
    border-radius: 5px;
    padding: 1px 5px;
  }
`;
export const EditPostFormCancelLink = styled(Link)`
  background-color: #497174;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  padding: 5px 5px;
  &:hover {
    color: white;
  }
`;
