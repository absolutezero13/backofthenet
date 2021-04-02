import React, { useEffect, useRef, useState } from "react";
import Player from "./Player";
import Team from "./Team";

interface team {
  id: number;
  name: string;
  icon: string;
}

const MainPage: React.FC = () => {
  const [teams, setTeams] = useState<team[]>([]);
  const [players, setPlayers] = useState<any>();
  const [isSelected, setIsSelected] = useState<number>();
  const table = useRef<HTMLTableElement>(null)!;
  const selectedTeam = teams.filter(
    (team: team): boolean => team.id === isSelected
  );

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

  const select = (id: number) => {
    setIsSelected(id);
  };
  const scroll = () => {
    if (table.current) {
      table.current.scrollIntoView();
    }
  };
  console.log(table);
  return (
    <div className="main-page">
      <h1>Teams</h1>
      <div className="main-page__teams">
        {teams.map((team: team) => (
          <Team
            key={team.id}
            isSelected={isSelected}
            select={select}
            scroll={scroll}
            getPlayers={getPlayers}
            team={team}
          />
        ))}
      </div>
      <div ref={table}>
        {selectedTeam[0] ? (
          <h1>{selectedTeam[0].name}'s Players</h1>
        ) : (
          <h1>Select a team</h1>
        )}
      </div>
      {players && (
        <table className="main-page__players">
          <thead>
            <tr>
              <th></th>
              <th>Country</th>
              <th>Name</th>
              <th>Age</th>
              <th>Foot</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player: any) => (
              <Player key={player.id} player={player} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MainPage;
