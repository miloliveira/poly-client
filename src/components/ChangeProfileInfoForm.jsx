// Dependencies
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import service from "../api/service";
// Components
import LoadingSpinner from "./LoadingSpinner";
// Style
import {
  EditProfileForm,
  InputProfilePicDiv,
  DeleteProfileButton,
} from "../styles/EditProfile.styles";

const ChangeProfileInfoForm = (props) => {
  // Destructure props
  const { userId } = props;
  // State and context variables
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [about, setAbout] = useState("");
  const [education, setEducation] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  // Navigation function
  const navigate = useNavigate();
  // Get authentication token from local storage
  const getToken = localStorage.getItem("authToken");
  // Firebase authentication state
  const [firebaseUser] = useAuthState(auth);

  // Function to fetch user details
  const getUser = async () => {
    // Send request to the server
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/in/${userId}`
    );
    //  Set initial state with user's information
    setName(response.data.name);
    setAbout(response.data.about);
    setEducation(response.data.education);
    setOccupation(response.data.occupation);
    setLocation(response.data.location);
    setUsername(response.data.username);
    setImageUrl(response.data.imageUrl);
    setIsLoading(false);
  };
  // Function to hadle user deletion
  const deleteUser = async (userId) => {
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/profile-delete/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );
    // Logout user and redirect the user to the home page
    await logoutUser();
    navigate("/");
  };

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    setIsUploading(true);
    uploadData.append("imageUrl", e.target.files[0]);
    // Using a service to upload the image
    service
      .uploadImage(uploadData)
      .then((response) => {
        setIsUploading(false);
        setImageUrl(response.fileUrl);
      })
      .catch((error) => console.log(error));
  };

  // Function to handle user's profile editing
  const handleProfileEdit = (e) => {
    // Prevent the default form submission
    e.preventDefault();
    // Check if image is still uploading
    if (isUploading) {
      alert("Image still upploading");
      return;
    }
    // Create the request body based on whether a new image is uploaded
    let body;
    if (imageUrl) {
      body = {
        username,
        name,
        imageUrl,
        education,
        occupation,
        location,
        about,
      };
    } else {
      body = {
        username,
        name,
        education,
        occupation,
        location,
        about,
      };
    }
    // Send request to update the user's profile
    axios
      .put(`${process.env.REACT_APP_API_URL}/profile-edit/${userId}`, body, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then(() => {
        // Reset form fields and navigate to current session user's profile page
        setName("");
        setUsername("");
        setAbout("");
        setEducation("");
        setLocation("");
        setOccupation("");
        navigate(`/in/${userId}`);
      })
      .catch((error) => {
        // Handle errors and set error message
        setErrorMessage(error.response.data.errorMessage);
      });
  };
  // Effect to fetch user information
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}

      <EditProfileForm onSubmit={handleProfileEdit}>
        <InputProfilePicDiv>
          {imageUrl && <img src={imageUrl} alt="profile pic" />}
          <label htmlFor="imageUrl" />
          <input
            id="imageUrl"
            type="file"
            name="imageUrl"
            onChange={(e) => handleFileUpload(e)}
          />
        </InputProfilePicDiv>
        {!firebaseUser && (
          <>
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
                setErrorMessage("");
              }}
            />
            {errorMessage && <p>{errorMessage}</p>}
          </>
        )}

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
      </DeleteProfileButton>
    </>
  );
};

export default ChangeProfileInfoForm;
