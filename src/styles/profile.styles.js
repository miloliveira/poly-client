import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfilePage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileMainDiv = styled.div`
  height: 100%;
  width: 60%;
`;
export const ProfileUserBannerDiv = styled.div`
  background-color: white;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
`;

export const RecentActivityDiv = styled.div`
  background-color: white;
  border-radius: 15px;
  border: 1px solid #d6e4e5;
  padding: 10px;
`;
export const ActivityPostsDiv = styled.div``;
