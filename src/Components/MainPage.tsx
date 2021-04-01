import React, { useEffect, useState } from "react";
import Player from "./Player";
import Team from "./Team";

interface team {
  id: number;
  name: string;
  icon: string;
}

const MainPage: React.FC = () => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const data = await fetch("https://mock-foooty-api.herokuapp.com/teams");
    const res = await data.json();
    setTeams(res.teams);
  };

  const getPlayers = async (id: number) => {
    const data = await fetch(
      `https://mock-foooty-api.herokuapp.com/teams/${id}/players`
    );
    const res = await data.json();
    setPlayers(res.players);
  };
  console.log(teams);
  console.log(players);
  return (
    <div className="main-page">
      <h1>Teams</h1>
      <div className="main-page__teams">
        {teams.map((team: team) => (
          <Team key={team.id} getPlayers={getPlayers} team={team} />
        ))}
      </div>
      <h1>Players</h1>
      <div className="main-page__players">
        {players.map((player) => (
          <Player player={player} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;