import React from "react";
import {
  OccupationIcon,
  AboutSectionComponent,
} from "../styles/profile.styles";
const Occupation = (props) => {
  const { occupation } = props;
  return (
    <AboutSectionComponent>
      <OccupationIcon />
      <p>{occupation}</p>
    </AboutSectionComponent>
  );
};

export default Occupation;
