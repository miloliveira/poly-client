// Dependencies
import axios from "axios";

// Create an instance of axios with a base URL configured from environment variables
const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

// Define an error handler function to be used for handling HTTP request errors
const errorHandler = (error) => {
  throw error;
};

// Function to upload an image using the configured axios instance
const uploadImage = (file) => {
  // Make a POST request to the "/upload" endpoint with the provided file data
  return api
    .post("/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

export default { uploadImage, errorHandler };
