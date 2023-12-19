// Dependencies
import React from "react";
// Style
import { LocationIcon, AboutSectionComponent } from "../styles/profile.styles";

const Location = (props) => {
  // Destructure props
  const { location } = props;
  return (
    <AboutSectionComponent>
      <LocationIcon />
      <p>{location}</p>
    </AboutSectionComponent>
  );
};

export default Location;
