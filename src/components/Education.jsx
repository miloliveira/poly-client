import React from "react";
import { EducationIcon, AboutSectionComponent } from "../styles/profile.styles";
const Education = (props) => {
  const { education } = props;
  return (
    <AboutSectionComponent>
      <EducationIcon />
      <p>{education}</p>
    </AboutSectionComponent>
  );
};

export default Education;
