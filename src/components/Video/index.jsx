import React from "react";
import { ActionBar } from "../ActionBar/index";
import { Description } from "../Description";
import sampleVideo from "../../assets/BigBuckBunny_512kb.mp4";

export const Video = ({ source }) => {
  return (
    <div>
      <video>
        <source src={sampleVideo} type="video/mp4" />
      </video>
      <button>Play</button>
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
