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
  justify-content: space-between;
  width: 80%;
`;

export const FeedLeftContentDiv = styled.div`
  width: 20%;
  background-color: #d6e4e5;
`;
export const FeedMainContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const CreatePostDiv = styled.div`
  display: flex;
  flex-direction: row;
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
    min-height: 50px;
    border: 1px solid #d6e4e5;
    border-radius: 25px;
    background-color: white;
    padding: 10px 20px 0px 20px;
  }
  textarea:focus {
    outline: 0;
  }
  button {
    background-color: #497174;
    color: white;
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
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
  button {
    color: #497174;
    border: none;
  }
`;
export const PostUserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 70%;
`;

//post popup component
export const PostPopupDiv = styled.div`
  height: 100%;
  width: 24px;
  padding-top: 15px;
`;

export const AboveContentPostPopup = styled.div`
  background-color: #eff5f5;
  position: absolute;
  ul {
    margin: 0;

    li {
      color: #497174;
    }
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

export const EachPostContent = styled.p`
  margin-bottom: 5px;
  padding: 15px;
  width: 100%;
  height: auto;
  background-color: white;

  word-wrap: break-word;
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
  flex-direction: column;
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  background-color: white;
  align-items: center;
  padding-bottom: 10px;
  border-radius: 10px;
`;

export const EachCommentFromFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: #eff5f5;
  border-radius: 10px;
  padding-top: 10px;
  margin-top: 10px;
`;

export const CommentUserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #eff5f5;
  align-items: center;

  button {
    background-color: #eff5f5;
    border: none;
    margin-right: 10px;
  }
`;
export const AboveContentCommentPopup = styled.div`
  background-color: grey;
  position: relative;
`;
export const CommentUserInfoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 35px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  p {
    position: relative;
    margin: 0px 10px;
    text-decoration: none;
    color: black;
    width: auto;
    text-align: center;
  }
`;

export const CommentUserImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  margin-left: 10px;
  object-fit: cover;
  object-position: 20% 10%;
  border-radius: 100px;
`;

export const EachCommentContent = styled.p`
  padding: 5px 30px;
  min-height: 30px;
  width: 100%;
  background-color: #eff5f5;
  word-wrap: break-word;
`;
