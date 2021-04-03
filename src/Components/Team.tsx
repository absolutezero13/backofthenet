import React from "react";
import { team } from "./MainPage";

//
interface TeamProps {
  team: team;
  getAndSetPlayers: (id: number) => void;
  select: (id: number) => void;
  isSelected: number | undefined;
}
const Team: React.FC<TeamProps> = ({
  team,
  getAndSetPlayers,
  select,
  isSelected,
}) => {
  return (
    <div
      onClick={() => {
        select(team.id);
        getAndSetPlayers(team.id);
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
