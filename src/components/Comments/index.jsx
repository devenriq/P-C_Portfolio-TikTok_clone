import React from "react";
import { Comment } from "../Comment/index";

export const Comments = ({ comments }) => {
  return (
    <ul>
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
