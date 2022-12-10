import React from "react";
import "./styles.css";

export const Description = ({ description, profile, sound, date }) => {
  return (
    <div className="description">
      <p className="description--profile">Profile</p>
      <p className="description--text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eum!
        Voluptatibus minus inventore atque quis mollitia exercitationem beatae
        accusantium illo accusamus aut ratione, at consequuntur nesciunt aliquam
        doloremque. Maiores, placeat.
      </p>
      <p className="description--date">20 hours ago</p>
    </div>
  );
};
