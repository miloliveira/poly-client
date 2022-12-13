import React from "react";
import SpinnerGif from "../assets/Dual Ring-2.1s-100px.gif";
import { SpinnerDiv } from "../styles/spinner.styles.js";
const LoadingSpinner = () => {
  return (
    <SpinnerDiv>
      <img src={SpinnerGif} alt="loading spinner" />
    </SpinnerDiv>
  );
};

export default LoadingSpinner;
