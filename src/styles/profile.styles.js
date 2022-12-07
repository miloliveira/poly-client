import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

//icons
export const DropDownIcon = styled(ArrowDropDownIcon)`
  color: #497174;
`;
export const DropUpIcon = styled(ArrowDropUpIcon)`
  color: #497174;
`;

//
export const ProfilePage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileMainDiv = styled.div`
  height: 100%;
  width: 50%;
`;
export const ProfileUserBannerDiv = styled.div`
  background-color: white;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: space-around;
  border-radius: 15px;
  border: 1px solid #d6e4e5;
  padding: 0px 20px;
`;
export const ProfileUserBannerInnerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const BannerFollowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin: 0;
  }
`;
export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  object-fit: cover;
  object-position: 20% 10%;
  border-radius: 100px;
`;
export const AboutDiv = styled.div`
  background-color: white;
  border-radius: 15px;
  border: 1px solid #d6e4e5;
  padding: 10px;
  margin-bottom: 10px;
`;
export const AboutDropDownButton = styled.button`
  background-color: white;
  border: none;
`;
export const RecentActivityDiv = styled.div`
  background-color: white;
  border-radius: 15px;
  border: 1px solid #d6e4e5;
  padding: 10px;
`;
export const ActivityPostsDiv = styled.div``;
