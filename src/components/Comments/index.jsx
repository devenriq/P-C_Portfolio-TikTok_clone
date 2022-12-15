import React, { useContext } from "react";
import { CommentsContext } from "../../components/context/CommentsContext";

import { Comment } from "../Comment/index";
import "./styles.css";
import { MdClose } from "react-icons/md";

export const Comments = ({ comments }) => {
  const { currentCommentsState, toggleComments } = useContext(CommentsContext);

  if (currentCommentsState) {
    return (
      <ul className="comments">
        <button onClick={() => toggleComments((prev) => !prev)}>
          <MdClose />
        </button>
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
  }
};
