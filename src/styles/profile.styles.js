import styled from "styled-components";
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
export const AboutDropDownButton = styled.button`
  background-color: white;
  border: none;
`;

export const AboutInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AboutInnerDivComponents = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const AddAboutInfoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

//About section location, occupation and education components
export const InnerAboutSectionComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    margin-left: 5px;
    margin-bottom: 0;
  }
`;
//
export const AboutDropDownDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const ActivityDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  border: 1px solid #d6e4e5;
  padding: 10px;
  h4 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
  }
  p {
    font-size: 0.9rem;
  }
`;

export const ActivityTabDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;

export const ActivityTabButton = styled.button`
  font-weight: bold;
  padding: 0 10px;
  margin-right: 15px;
  font-size: 0.9rem;
  height: 30px;
  border: none;
  border-radius: 15px;
  background-color: #eff5f5;
  color: #497174;
  :active {
    background-color: #497174 !important;
    color: white !important;
  }
  :focus {
    background-color: #497174 !important;
    color: white !important;
  }
`;

export const ActivityContentDiv = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;
