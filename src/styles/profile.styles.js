import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PostAddIcon from "@mui/icons-material/PostAdd";

//icons

export const DropDownIcon = styled(ArrowDropDownIcon)`
  color: #497174;
`;
export const DropUpIcon = styled(ArrowDropUpIcon)`
  color: #497174;
`;
export const LocationIcon = styled(LocationOnIcon)`
  color: #497174;
`;
export const EducationIcon = styled(SchoolIcon)`
  color: #497174;
`;
export const OccupationIcon = styled(WorkIcon)`
  color: #497174;
`;
export const AddAboutInfoIcon = styled(PostAddIcon)`
  color: #497174;
`;
//
export const ProfilePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileMainDiv = styled.div`
  height: auto;
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
export const ProfileUserBannerDiv = styled.div`
  background-color: white;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: space-evenly;
  border-radius: 15px;
  border: 1px solid #d6e4e5;
  padding: 20px 20px;
  h2 {
    margin: 0;
  }
`;
export const ProfileUserBannerInnerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const BannerFollowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 170px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
    flex-direction: column;
    align-items: end;
  }
  p {
    margin: 0;
    font-weight: bold;
    color: #497174;
  }
`;
export const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 130px;
  object-fit: cover;
  object-position: 20% 10%;

  @media screen and (max-width: 1200px) {
    width: 130px;
    height: 130px;
    border-radius: 130px;
  }

  @media screen and (max-width: 700px) {
    width: 120px;
    height: 120px;
    border-radius: 120px;
  }

  @media screen and (max-width: 400px) {
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }
`;
export const AboutDiv = styled.div`
  background-color: white;
  border-radius: 15px;
  border: 1px solid #d6e4e5;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  h4 {
    font-size: 1rem;
    font-weight: bold;
  }
  p {
    font-size: 0.9rem;
  }
`;

export const AboutInnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const AboutSectionLinkToSettingsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 15px;
  font-size: 0.8rem;

  p {
    font-size: 0.8rem;
    margin: 0;
    padding-right: 5px;
  }
`;

export const AboutSectionComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 25px;
  p {
    margin-left: 5px;
    margin-bottom: 0;
  }
`;

export const UserActivityLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  color: #497174;
  font-weight: bold;
  margin: 10px 0px;
  :hover {
    color: #59898d;
  }
`;
