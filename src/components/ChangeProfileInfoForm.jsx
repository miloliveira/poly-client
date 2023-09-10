import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import service from "../api/service";
import LoadingSpinner from "./LoadingSpinner";
import {
  EditProfileForm,
  InputProfilePicDiv,
  DeleteProfileButton,
} from "../styles/EditProfile.styles";

const ChangeProfileInfoForm = (props) => {
  const { user, logoutUser } = useContext(AuthContext);
  const { userId } = props;
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

  const deleteUser = async (userId) => {
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/profile-delete/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );
    await logoutUser();
    navigate("/");
  };

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    setIsUploading(true);

    uploadData.append("imageUrl", e.target.files[0]);

    service
      .uploadImage(uploadData)
      .then((response) => {
        setIsUploading(false);
        setimageUrl(response.fileUrl);
      })
      .catch((error) => console.log(error));
  };

  const handleProfileEdit = (e) => {
    e.preventDefault();
    if (isUploading) {
      alert("Image still upploading");
      return;
    }
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

    axios
      .put(`${process.env.REACT_APP_API_URL}/profile-edit/${userId}`, body, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then(() => {
        setName("");
        setUsername("");
        setAbout("");
        setEducation("");
        setLocation("");
        setOccupation("");
        navigate(`/in/${userId}`);
      })
      .catch((error) => {
        //console.log(error.response.data.errorMessage);
        setErrorMessage(error.response.data.errorMessage);
      });
  };
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
