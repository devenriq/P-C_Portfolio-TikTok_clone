import React, { useState, useContext } from "react";
import { CommentsContext } from "../../components/context/CommentsContext";

import "./styles.css";

import { FaHeart, FaComment, FaShare, FaPlusCircle } from "react-icons/fa";

export const ActionBar = ({
  profileImg,
  likesCount,
  commentsCount,
  sharesCount,
}) => {
  const [likes, setLikes] = useState(likesCount);
  const [comments, setComments] = useState(commentsCount);
  const { toggleComments } = useContext(CommentsContext);
  const [shares, setShares] = useState(sharesCount);

  return (
    <ul className="actions">
      <li className="actions--item">
        <img className="actions--img" src={profileImg} alt="Foto de perfil" />
        <span>
          <FaPlusCircle />
        </span>
      </li>
      <li className="actions--item">
        <button
          onClick={() => {
            if (likes !== likesCount) {
              setLikes(likesCount);
            } else {
              setLikes((prev) => prev + 1);
            }
          }}
        >
          <FaHeart />
        </button>
        <p className="actions--number">{likes}</p>
      </li>
      <li className="actions--item">
        <button onClick={() => toggleComments((prev) => !prev)}>
          <FaComment />
        </button>
        <p className="actions--number">{comments}</p>
      </li>
      <li className="actions--item">
        <button>
          <FaShare />
        </button>
        <p className="actions--number">{shares}</p>
      </li>
    </ul>
  );
};
