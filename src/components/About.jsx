import React from "react";
import { Link } from "react-router-dom";
import {
  AboutDiv,
  AboutInnerDiv,
  AboutSectionLinkToSettingsDiv,
} from "../styles/profile.styles";
import Location from "../components/Location";
import Education from "../components/Education";
import Occupation from "../components/Occupation";
const About = (props) => {
  const { user, userId, profileUser } = props;
  return (
    <AboutDiv>
      <h4>About</h4>

      {profileUser.about && <p>{profileUser.about}</p>}

      <AboutInnerDiv>
        {profileUser.location && <Location location={profileUser.location} />}
        {profileUser.education && (
          <Education education={profileUser.education} />
        )}
        {profileUser.occupation && (
          <Occupation occupation={profileUser.occupation} />
        )}
      </AboutInnerDiv>

      {user &&
        user._id === userId &&
        (!profileUser.about ||
          !profileUser.location ||
          !profileUser.education ||
          !profileUser.occupation) && (
          <AboutSectionLinkToSettingsDiv>
            <p>Complete your about section</p>
            <Link to={`/edit/${userId}`} className="nav-link">
              here
            </Link>
          </AboutSectionLinkToSettingsDiv>
        )}
    </AboutDiv>
  );
};

export default About;
