import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import service from "../api/service";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ChangeProfileInfoForm from "../components/ChangeProfileInfoForm";
import LoadingSpinner from "../components/LoadingSpinner";
import {
  EditProfilePage,
  EditProfileForm,
  InputProfilePicDiv,
  DeleteProfileButton,
} from "../styles/EditProfile.styles";
const ProfileSettings = () => {
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false)
  const { user, logoutUser } = useContext(AuthContext);
  const { userId } = useParams();
  const navigate = useNavigate();
  const getToken = localStorage.getItem("authToken");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [about, setAbout] = useState("");
  const [education, setEducation] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const getUser = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/in/${userId}`)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setAbout(response.data.about);
        setEducation(response.data.education);
        setOccupation(response.data.occupation);
        setLocation(response.data.location);
        setUsername(response.data.username);
        setimageUrl(response.data.imageUrl);
        setIsLoading(false);
      });
  };

  

  
  
  

  return (
    <EditProfilePage>

      

        <>
          {/* <EditProfileForm onSubmit={handleProfileEdit}>
            <h4>Edit your profile information</h4>
            <InputProfilePicDiv>
              <label htmlFor="imageUrl" />
              <input
                id="imageUrl"
                type="file"
                name="imageUrl"
                onChange={(e) => handleFileUpload(e)}
              />

              {imageUrl && <img src={imageUrl} alt="profile pic" />}
            </InputProfilePicDiv>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <label htmlFor="about">About</label>
            <input
              id="about"
              type="text"
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />

            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />

            <label htmlFor="occupation">Occupation</label>
            <input
              id="occupation"
              type="text"
              value={occupation}
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
            />
            <label htmlFor="education">Education</label>
            <input
              id="education"
              type="text"
              value={education}
              onChange={(e) => {
                setEducation(e.target.value);
              }}
            />

            <button type="submit">Save changes</button>
          </EditProfileForm>
          <DeleteProfileButton
            onClick={() => {
              deleteUser(user._id);
            }}
          >
            Delete profile
          </DeleteProfileButton> */}
          {showChangePasswordForm ? <ChangePasswordForm userId={userId} /> : <ChangeProfileInfoForm  userId={userId} /> }
          <button onClick={()=>setShowChangePasswordForm(!showChangePasswordForm)} >{showChangePasswordForm?  "change profile info": "change password" }</button>
        </>
     
    </EditProfilePage>
  );
};

export default ProfileSettings;
