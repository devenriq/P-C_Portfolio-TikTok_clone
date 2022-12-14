import React, { useRef } from "react";
import { ActionBar } from "../ActionBar/index";
import { Description } from "../Description";
import "./styles.css";

import { FaPlayCircle } from "react-icons/fa";

import sampleVideo from "../../assets/BigBuckBunny_512kb.mp4";

export const Video = ({ source }) => {
  const videoRef = useRef(null);
  const buttonPlayReference = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      buttonPlayReference.current.classList.add("invisible");
    } else {
      videoRef.current.pause();
      buttonPlayReference.current.classList.remove("invisible");
    }
  };

  return (
    <div className="videoContainer">
      <video
        loop
        poster={source}
        ref={videoRef}
        className="video"
        onClick={togglePlay}
      >
        <source src={sampleVideo} type="video/mp4" />
      </video>
      <button className="video--button" ref={buttonPlayReference}>
        <FaPlayCircle />
      </button>
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
