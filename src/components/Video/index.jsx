import React from "react";
import { ActionBar } from "../ActionBar/index";

export const Video = ({ source }) => {
  return (
    <div>
      <img src={source} alt="video" />
      <ActionBar
        profileImg={"https://picsum.photos/200"}
        likesCount={10}
        commentsCount={30}
        sharesCount={2}
      />
    </div>
  );
};
