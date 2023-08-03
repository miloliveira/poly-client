import React from "react";
import { LocationIcon, AboutSectionComponent } from "../styles/profile.styles";
const Location = (props) => {
  const { location } = props;
  return (
    <AboutSectionComponent>
      <LocationIcon />
      <p>{location}</p>
    </AboutSectionComponent>
  );
};

export default Location;
