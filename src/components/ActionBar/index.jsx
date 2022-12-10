import React from "react";

import { FaHeart, FaComment, FaShare } from "react-icons/fa";

export const ActionBar = ({ profileImg, likes, comments, shares }) => {
  return (
    <ul className="actions">
      <li className="actions--item">
        <img className="actions--img" src={profileImg} alt="Foto de perfil" />
      </li>
      <li className="actions--item">
        <FaHeart />
        <p className="actions--number">{likes}</p>
      </li>
      <li className="actions--item">
        <FaComment />
        <p className="actions--number">{comments}</p>
      </li>
      <li className="actions--item">
        <FaShare />
        <p className="actions--number">{shares}</p>
      </li>
    </ul>
  );
};
