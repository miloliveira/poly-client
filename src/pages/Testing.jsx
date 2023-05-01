import React, { useState } from "react";
import axios from "axios";
const Testing = () => {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    //console.log("submitting");
    e.preventDefault();
    if (!previewFile) {
      return;
    }

    uploadImage(previewSource);
  };
  const uploadImage = async (base64EncodedImage) => {
    try {
      console.log(base64EncodedImage);
      const body = await JSON.stringify({ data: base64EncodedImage });
      await axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, body, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <p>upload</p>
      <form onSubmit={handleSubmitFile}>
        <input type="file" onChange={handleFileUpload} value={fileInputState} />
        <button type="submit">upload</button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen pic" style={{ width: "300px" }} />
      )} */}
    </div>
  );
};

export default Testing;
