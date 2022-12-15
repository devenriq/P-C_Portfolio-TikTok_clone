import React, { useContext } from "react";
import { CommentsContext } from "../../components/context/CommentsContext";

import { Comment } from "../Comment/index";
import "./styles.css";

export const Comments = ({ comments }) => {
  return (
    <ul className="comments">
      <Comment
        profilePic={"https://picsum.photos/50"}
        content="Hello!"
        likes="1"
        user="Enrique"
        date="Hace 2 horas"
      />
      <Comment
        profilePic={"https://picsum.photos/50"}
        content="Hello!"
        likes="1"
        user="Enrique"
        date="Hace 2 horas"
      />
      <Comment
        profilePic={"https://picsum.photos/50"}
        content="Hello!"
        likes="1"
        user="Enrique"
        date="Hace 2 horas"
      />
    </ul>
  );
};
