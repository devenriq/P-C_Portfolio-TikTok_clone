import React from "react";
import { FaHeart } from "react-icons/fa";

export const Comment = ({ profilePic, user, content, likes, date }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <img src={profilePic} alt={user} />
        <span>@{user}</span>
      </div>
      <div className="comment--main">
        <p>{content}</p>
        <button>
          <FaHeart />
          {likes}
        </button>
      </div>
      <p className="comment--date">{date}</p>
    </div>
  );
};
