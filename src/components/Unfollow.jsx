import React from "react";

import {
  FollowComponent,
  FollowBtnString,
  FollowingCheckIcon,
} from "../styles/post.styles";
const Unfollow = () => {
  return (
    <FollowComponent>
      <FollowingCheckIcon />
      <FollowBtnString>Following</FollowBtnString>
    </FollowComponent>
  );
};

export default Unfollow;
