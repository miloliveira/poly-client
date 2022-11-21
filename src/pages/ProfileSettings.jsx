import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import service from "../api/service";
const ProfileSettings = () => {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);
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
  const [isUploading, setIsUploading] = useState(false);
  const getUser = () => {
    axios.get(`http://localhost:5005/in/${userId}`).then((response) => {
      console.log(response.data);
      setName(response.data.name);
      setUsername(response.data.username);
      setimageUrl(response.data.imageUrl);
    });
  };

  const deleteUser = (userId) => {
    axios.delete(`http://localhost:5005/profile-delete/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    });
    logoutUser();
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
        console.log("this is the response of upploading", response);
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
      .put(`http://localhost:5005/profile-edit/${userId}`, body, {
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
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2>Edit your profile info</h2>

      <form onSubmit={handleProfileEdit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label>about</label>
        <input
          type="text"
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        />

        <label>location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />

        <label>occupation</label>
        <input
          type="text"
          value={occupation}
          onChange={(e) => {
            setOccupation(e.target.value);
          }}
        />
        <label>education</label>
        <input
          type="text"
          value={education}
          onChange={(e) => {
            setEducation(e.target.value);
          }}
        />

        <label>image</label>
        <input
          type="file"
          name="imageUrl"
          onChange={(e) => handleFileUpload(e)}
        />

        {imageUrl && (
          <>
            <img src={imageUrl} alt="profile pic" />
          </>
        )}

        <button type="submit">Edit</button>
      </form>
      <button
        onClick={() => {
          deleteUser(user._id);
        }}
      >
        Delete profile
      </button>
    </div>
  );
};

export default ProfileSettings;
