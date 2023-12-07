import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./variables.styles";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

//styled icons
export const SendPostIcon = styled(SendIcon)`
  color: ${colors.strongHighlight};
`;

export const PostPopupIcon = styled(MoreHorizIcon)`
  color: ${colors.strongHighlight};
`;

//styled components
export const CreateCommentForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${colors.backgroundSecondary};
  margin: 0;
  padding: 0;
  height: 40px;

  @media screen and (max-width: 700px) {
    height: 35px;
  }
`;

export const CreateCommentButton = styled.button`
  background-color: ${colors.backgroundSecondary};
  border: none;
  margin-left: 5px;
  padding: 0;
  @media screen and (max-width: 700px) {
    margin-right: 5px;
    height: 90%;
  }
`;

export const CreateCommentLabel = styled.label`
  width: 90%;
  padding: 0;
  height: 100%;
  margin: 0;
  textarea {
    width: 100%;
    height: 100%;
    background-color: ${colors.backgroundSecondary};
    border: 1px solid ${colors.border};
    border-radius: 5px;
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

  @media screen and (max-width: 700px) {
    margin-left: 5px;
    textarea {
      padding: 5px 10px 0px 10px;
    }
  }
`;

export const ViewCommentsList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: ${colors.backgroundSecondary};
  align-items: space-around;
  border-radius: 5px;
  border-bottom: 1px solid ${colors.border};
  padding-top: 20px;
`;
export const CommentsListInnerDiv = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const EachCommentFromFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: ${colors.backgroundPrimary};
  border-radius: 5px;
  padding-top: 5px;
  margin-bottom: 15px;
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
  background-color: ${colors.backgroundPrimary};
  padding-left: 10px;
  font-size: 0.9rem;
`;

export const ReactTimeAgoDiv = styled.div`
  margin: 0;
  font-size: 0.7rem;
  color: ${colors.fontBlack};
`;

//Comment Popup component
export const CommentPopupDiv = styled.div`
  position: relative;
  margin-right: 10px;
  background-color: ${colors.backgroundPrimary};
  button {
    border: none;
    background-color: ${colors.backgroundPrimary};
  }
`;
export const AboveContentCommentPopup = styled.div`
  background-color: transparent;
  position: absolute;
  right: 0px;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9rem;
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
    color: ${colors.fontBlack};
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
  object-fit: cover;
  object-position: 20% 10%;
  border-radius: 100px;
`;

export const EachCommentContent = styled.p`
  padding: 5px 15px;
  min-height: 30px;
  width: 100%;
  background-color: ${colors.backgroundPrimary};
  word-wrap: break-word;
  font-size: 0.9rem;
`;

//edit comments
export const EditCommentContentForm = styled.form`
  padding: 5px 15px;
  background-color: ${colors.backgroundPrimary};
  display: flex;
  flex-direction: column;
  textarea {
    border-radius: 5px;
    width: 100%;
    min-height: 50px;
    padding: 5px 15px;
    background-color: ${colors.backgroundSecondary};
    border: 1px solid ${colors.border};
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
    background-color: ${colors.mildHighlight};
    color: ${colors.fontWhite};
    border-radius: 5px;
    padding: 1px 5px;
    @media screen and (max-width: 700px) {
      font-size: 0.9rem;
    }
  }
  button:hover {
    background-color: ${colors.strongHighlight};
  }
`;
