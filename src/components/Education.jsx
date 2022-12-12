import React from "react";
import {
  EducationIcon,
  InnerAboutSectionComponent,
} from "../styles/profile.styles";
const Education = (props) => {
  const { education } = props;
  return (
    <InnerAboutSectionComponent>
      <EducationIcon />
      <p>{education}</p>
    </InnerAboutSectionComponent>
  );
};

export default Education;
