// Dependencies
import React from "react";

// Style
import {
  OccupationIcon,
  AboutSectionComponent,
} from "../styles/profile.styles";

const Occupation = (props) => {
  // Destructure props
  const { occupation } = props;

  return (
    <AboutSectionComponent>
      <OccupationIcon />
      <p>{occupation}</p>
    </AboutSectionComponent>
  );
};

export default Occupation;
