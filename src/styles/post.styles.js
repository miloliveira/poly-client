import styled from "styled-components";
import { Link } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
//styled icons
export const SendPostIcon = styled(SendIcon)`
  color: #497174;
`;

export const PostPopupIcon = styled(MoreHorizIcon)`
  color: #497174;
`;

export const CommentBtnIcon = styled(InsertCommentIcon)`
  color: #497174;
`;

export const FollowingCheckIcon = styled(CheckIcon)`
  color: #497174;
`;

export const FollowAddIcon = styled(AddIcon)`
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

  width: 100%;
`;
/* export const FeedContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 55%;
  @media screen and (max-width: 1200px) {
    width: 65%;
  }

  @media screen and (max-width: 700px) {
    width: 85%;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;
 */
/* export const FeedLeftContentDiv = styled.div`
  width: 20%;
  background-color: #d6e4e5;
`; */
export const FeedMainContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 1200px) {
    width: 65%;
  }

  @media screen and (max-width: 700px) {
    width: 85%;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }

  h3 {
    text-align: center;
    margin-top: 30px;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #497174;

  :hover {
    color: #497174;
    font-weight: bold;
  }
`;

export const CreatePostDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
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
export const CreatePostLabel = styled.div`
  width: 100%;
  textarea {
    width: 100%;
    height: 40px;
    border: 1px solid #d6e4e5;
    border-radius: 25px;
    background-color: white;
    padding: 10px 20px 0px 20px;
    outline: none;
    resize: none;
    font-size: 0.8rem;
  }
  textarea::-webkit-scrollbar {
    display: none;
  }
  input {
    cursor: pointer;
    width: 100%;
    font-size: 0.8rem;
  }

  input::file-selector-button {
    color: #497174;
    background-color: #eff5f5;
    border: 1px solid #d6e4e5;
    border-radius: 15px;
    cursor: pointer;
  }
`;

export const FeedPostList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: #eff5f5;
  width: 100%;
  height: auto;
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
  font-size: 0.9rem;
  button {
    background-color: #eff5f5;
    color: #497174;
    border: none;
  }
`;

export const FollowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FollowBtnString = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 0.9rem;
  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
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
    background-color: #59898d;
    color: white;
    width: 100%;
    border-radius: 5px;
    text-decoration: none;
  }
  button:hover {
    background-color: #497174;
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
  height: 50px;
  text-decoration: none;
  align-items: center;
  color: black;
`;

export const NameAndTimeAgoDiv = styled.div`
  margin: 0px 10px;
  text-decoration: none;
  color: black;

  p {
    margin: 0px;
    width: auto;
    text-align: left;
    font-weight: bold;
    @media screen and (max-width: 400px) {
      font-size: 0.8rem;
    }
  }
`;
export const ReactTimeAgoDiv = styled.div`
  margin: 0;
  font-size: 0.7rem;
  color: black;
`;

export const PostUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  object-fit: cover;
  object-position: 20% 10%;
  border-radius: 100px;
  @media screen and (max-width: 400px) {
    width: 30px;
    height: 30px;
  }
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
  padding: 10px 15px;
  width: 100%;
  height: auto;
  background-color: white;
  word-wrap: break-word;
  font-size: 0.9rem;
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
  border-radius: 5px;
  border-bottom: 2px solid #eff5f5;
`;
export const NumberOfCommentsP = styled.p`
  margin-right: 10px;
  font-size: 0.8rem;
  cursor: pointer;
`;
export const NumberOfLikesP = styled.p`
  margin-left: 10px;
  font-size: 0.8rem;
`;

export const EachPostButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px 10px 15px;
  margin: 0;
  background-color: white;
  border-radius: 15px;
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
  justify-content: space-evenly;
  background-color: white;
  margin: 0;
  button {
    background-color: white;
    border: none;
  }
`;

export const CreateCommentLabel = styled.label`
  width: 90%;
  padding: 0;
  height: 40px;
  textarea {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid #d6e4e5;
    border-radius: 25px;
    padding: 10px 20px 0px 20px;
    outline: none;
    resize: none;
    font-size: 0.8rem;
  }
  textarea::-webkit-scrollbar {
    display: none;
  }
  textarea:focus {
    outline: 0;
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
  border-bottom: 1px solid #d6e4e5;
  padding-top: 10px;
`;
export const CommentsListInnerDiv = styled.div`
  width: 85%;
  height: auto;
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
  padding-top: 5px;
  margin-bottom: 10px;
`;
export const CommentInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  min-height: 30px;
  width: 100%;
`;
export const CommentUserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  background-color: #eff5f5;
  padding-left: 10px;
  font-size: 0.9rem;
`;
//Comment Popup component
export const CommentPopupDiv = styled.div`
  position: relative;
  margin-right: 10px;
  background-color: #eff5f5;
  button {
    border: none;
    background-color: #eff5f5;
  }
`;
export const AboveContentCommentPopup = styled.div`
  background-color: #eff5f5;
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
  flex-wrap: wrap;
  align-items: center;
  width: auto;
  min-height: 30px;
  text-decoration: none;
  padding: 0;
  p {
    margin: 0px 10px;
    text-decoration: none;
    color: black;
    width: auto;
    text-align: center;
    font-weight: bold;
    font-size: 0.8rem;
  }
`;
export const CommentUserInfoLinkInnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentUserImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 15px;
  object-fit: cover;
  object-position: 20% 10%;
  border-radius: 100px;
`;

export const EachCommentContent = styled.p`
  padding: 5px 15px;
  min-height: 30px;
  width: 100%;
  background-color: #eff5f5;
  word-wrap: break-word;
  font-size: 0.9rem;
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
    padding: 5px 15px;
    background-color: white;
    border: 1px solid #d6e4e5;
    outline: none;
    resize: none;
    font-size: 0.9rem;
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
    padding: 10px 15px;
    background-color: white;
    border: 1px solid #d6e4e5;
    border-radius: 15px;
    outline: none;
    resize: none;
    font-size: 0.9rem;
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
    border-radius: 15px;
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
