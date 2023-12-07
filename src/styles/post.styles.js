import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./variables.styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

//styled icons
export const ShareIcon = styled(SubdirectoryArrowRightIcon)`
  color: ${colors.strongHighlight};
`;

export const SendPostIcon = styled(SendIcon)`
  color: ${colors.strongHighlight};
`;

export const PostPopupIcon = styled(MoreHorizIcon)`
  color: ${colors.strongHighlight};
`;

export const CommentBtnIcon = styled(InsertCommentIcon)`
  color: ${colors.strongHighlight};
`;

export const FollowingCheckIcon = styled(CheckIcon)`
  color: ${colors.strongHighlight};
`;

export const FollowAddIcon = styled(AddIcon)`
  color: ${colors.strongHighlight};
`;

export const LikeBtnIcon = styled(ThumbUpAltIcon)`
  color: ${colors.strongHighlight};
`;
export const DislikeBtnIcon = styled(ThumbDownAltIcon)`
  color: ${colors.strongHighlight};
`;

//styled components
export const FeedPageDiv = styled.div`
  height: auto;
  background-color: ${colors.backgroundPrimary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const FeedMainContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 1200px) {
    width: 60%;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }

  @media screen and (max-width: 400px) {
    width: 98%;
  }

  h3 {
    text-align: center;
    margin-top: 30px;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: ${colors.fontContrast};

  :hover {
    color: ${colors.fontContrast};
    font-weight: bold;
  }
`;

export const CreatePostDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  background-color: ${colors.backgroundSecondary};
  border: 1px solid ${colors.border};
  border-radius: 5px;
  padding: 15px 5px;
`;

export const CreatePostUserImg = styled.img`
  width: 50px;
  height: 50px;
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
    background-color: ${colors.strongHighlight};
    color: ${colors.fontWhite};
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
  }
`;
export const CreatePostLabel = styled.div`
  width: 100%;
  textarea {
    width: 100%;
    height: 40px;
    border: 1px solid ${colors.border};
    border-radius: 5px;
    background-color: ${colors.backgroundSecondary};
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
    color: ${colors.fontContrast};
    background-color: ${colors.backgroundPrimary};
    border: 1px solid ${colors.border};
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const FeedPostList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: ${colors.backgroundPrimary};
  width: 100%;
  height: auto;
`;

export const PostFromFeedList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundSecondary};
  margin-bottom: 15px;
  border: 1px solid ${colors.border};
  border-radius: 5px;
`;
export const PostInfoDiv = styled.div`
  background-color: ${colors.backgroundPrimary};
  border-radius: 5px;
  border-bottom: 2px solid ${colors.backgroundPrimary};
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  button {
    background-color: ${colors.backgroundPrimary};
    color: ${colors.fontContrast};
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

export const SharedPostDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    margin: 5px 10px;
  }
`;

export const SharePopupDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const SharePopupButton = styled.button`
  margin-right: 10px;
  background-color: transparent;
  border: none;
`;

export const DeleteShareButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.9rem;
  padding: 0px 5px;
  color: ${colors.strongHighlight};
  :hover {
    font-weight: bold;
  }
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
  right: 0px;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  button {
    background-color: ${colors.mildHighlight};
    color: ${colors.fontWhite};
    width: 100%;
    border-radius: 5px;
  }
  button:hover {
    background-color: ${colors.strongHighlight};
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
  color: ${colors.fontBlack};
`;

export const NameAndTimeAgoDiv = styled.div`
  margin: 0px 10px;
  text-decoration: none;
  color: ${colors.fontBlack};

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
  color: ${colors.fontBlack};
`;

export const PostUserImg = styled.img`
  width: 40px;
  height: 40px;
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
  background-color: ${colors.backgroundSecondary};
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
  border-bottom: 2px solid ${colors.backgroundPrimary};
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
  background-color: ${colors.backgroundSecondary};
  border-radius: 5px;
`;
export const LikeButton = styled.button`
  border: none;
  background-color: ${colors.backgroundSecondary};
  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

export const TogleCommentBtn = styled.button`
  background-color: ${colors.backgroundSecondary};
  border: none;
  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

export const ShareButton = styled.button`
  background-color: ${colors.backgroundSecondary};
  border: none;
  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

//edit posts
export const EditPostContentForm = styled.form`
  padding: 5px 15px;
  background-color: ${colors.backgroundPrimary};
  display: flex;
  flex-direction: column;
  textarea {
    height: 150px;
    width: 100%;
    padding: 10px 15px;
    background-color: ${colors.backgroundSecondary};
    border: 1px solid ${colors.border};
    border-radius: 5px;
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
    color: ${colors.fontContrast};
    background-color: ${colors.backgroundPrimary};
    border: 1px solid ${colors.border};
    border-radius: 5px;
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
    background-color: ${colors.mildHighlight};
    color: ${colors.fontWhite};
    border-radius: 5px;
    padding: 1px 5px;
  }
  button:hover {
    background-color: ${colors.strongHighlight};
  }
`;
export const EditPostFormCancelLink = styled(Link)`
  background-color: ${colors.strongHighlight};
  color: ${colors.fontWhite};
  border-radius: 5px;
  text-decoration: none;
  padding: 5px 5px;
  &:hover {
    color: ${colors.fontWhite};
  }
`;
