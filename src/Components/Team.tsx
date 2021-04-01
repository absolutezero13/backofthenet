import React from "react";

const Team: React.FC<any> = ({ team, getPlayers }) => {
  return (
    <div onClick={() => getPlayers(team.id)} className="team">
      <img src={team.icon} alt="" />
      <p> {team.name} </p>
      <div className="team__selector"></div>
    </div>
  );
};

export default Team;
