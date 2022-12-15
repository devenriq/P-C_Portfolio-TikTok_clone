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

  const handleLike = (e) => {
    const target = e.target;

    if (likes !== likesCount) {
      target.classList.remove("active");
      setLikes(likesCount);
    } else {
      target.classList.add("active");
      setLikes((prev) => prev + 1);
    }
  };

  return (
    <ul className="actions">
      <li className="actions--item">
        <img className="actions--img" src={profileImg} alt="Foto de perfil" />
        <span>
          <FaPlusCircle />
        </span>
      </li>
      <li className="actions--item">
        <button onClick={handleLike}>
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
