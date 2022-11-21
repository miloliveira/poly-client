import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { setShowLoginToggle } = props;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const body = await { username, password, name };

      await axios.post("http://localhost:5005/auth/signup", body);

      await setShowLoginToggle(true);
      await setErrorMessage("");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  return (
    <div>
      <h1>Welcome! Create your account and join the community</h1>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label>password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Signup</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Signup;
