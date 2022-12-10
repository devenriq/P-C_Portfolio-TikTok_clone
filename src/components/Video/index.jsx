import React from "react";
import { ActionBar } from "../ActionBar/index";
import { Description } from "../Description";

export const Video = ({ source }) => {
  return (
    <div>
      <img src={source} alt="video" />
      <ActionBar
        profileImg={"https://picsum.photos/900"}
        likesCount={10}
        commentsCount={30}
        sharesCount={2}
      />
      <Description />
    </div>
  );
};
