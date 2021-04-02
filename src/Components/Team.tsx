import React, { useState } from "react";

const Team: React.FC<any> = ({
  team,
  getPlayers,
  select,
  isSelected,
  scroll,
}) => {
  return (
    <div
      onClick={() => {
        select(team.id);
        getPlayers(team.id);
        setTimeout(() => scroll(), 500);
      }}
      className="team"
    >
      <img src={team.icon} alt="" />
      <p> {team.name} </p>
      <div
        style={{
          backgroundColor: isSelected === team.id ? "#25aefe" : "#ededed",
        }}
        className="team__selector"
      ></div>
    </div>
  );
};

export default Team;
