import React from "react";
import { LocationIcon, LocationComponent } from "../styles/profile.styles";
const Location = (props) => {
  const { location } = props;
  return (
    <LocationComponent>
      <LocationIcon />
      <p>{location}</p>
    </LocationComponent>
  );
};

export default Location;
