// Dependencies
import React from "react";
// Style
import { EducationIcon, AboutSectionComponent } from "../styles/profile.styles";
const Education = (props) => {
  // Destructure props
  const { education } = props;
  return (
    <AboutSectionComponent>
      <EducationIcon />
      <p>{education}</p>
    </AboutSectionComponent>
  );
};

export default Education;
