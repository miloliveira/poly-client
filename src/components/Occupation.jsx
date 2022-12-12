import React from "react";
import {
  OccupationIcon,
  InnerAboutSectionComponent,
} from "../styles/profile.styles";
const Occupation = (props) => {
  const { occupation } = props;
  return (
    <InnerAboutSectionComponent>
      <OccupationIcon />
      <p>{occupation}</p>
    </InnerAboutSectionComponent>
  );
};

export default Occupation;
