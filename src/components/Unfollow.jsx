// Dependencies
import React from "react";

// Style
import {
  FollowDiv,
  FollowBtnString,
  FollowingCheckIcon,
} from "../styles/post.styles";

const Unfollow = () => {
  return (
    <FollowDiv>
      <FollowingCheckIcon />
      <FollowBtnString>Following</FollowBtnString>
    </FollowDiv>
  );
};

export default Unfollow;
