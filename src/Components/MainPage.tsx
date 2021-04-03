import React, { useEffect, useRef, useState } from "react";
import Player from "./Player";
import Team from "./Team";
import { getTeams, getPlayers } from "../Utils/getData";
import { motion } from "framer-motion";
import Loading from "./Loading";

//

export interface team {
  id: number;
  name: string;
  icon: string;
}

// Animation

const mainPageVariants = {
  initial: {
    x: -1000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const MainPage: React.FC = () => {
  const [teams, setTeams] = useState<team[]>([]);
  const [players, setPlayers] = useState<any>();
  const [isSelected, setIsSelected] = useState<number>();
  const table = useRef<HTMLTableElement>(null)!;
  const selectedTeam = teams.filter((team: team) => team.id === isSelected);

  // Getting Teams

  useEffect(() => {
    getAndSetTeams();
  }, []);

  const getAndSetTeams = async () => {
    const teams = await getTeams();
    setTeams(teams);
  };

  // Getting Players and Scrolling

  const getAndSetPlayers = async (id: number) => {
    const players = await getPlayers(id);
    setPlayers(players);
    if (table.current) {
      table.current.scrollIntoView();
    }
  };

  // Selecting a single element to style selector

  const select = (id: number) => {
    setIsSelected(id);
  };
  if (teams.length === 0) return <Loading />;
  return (
    <motion.div
      variants={mainPageVariants}
      initial="initial"
      animate="visible"
      className="main-page"
    >
      <h1>Teams</h1>
      <div className="main-page__teams">
        {teams.map((team: team) => (
          <Team
            key={team.id}
            isSelected={isSelected}
            select={select}
            getAndSetPlayers={getAndSetPlayers}
            team={team}
          />
        ))}
      </div>
      {teams && (
        <div ref={table}>
          {selectedTeam[0] ? (
            <h1>{selectedTeam[0].name}'s Players</h1>
          ) : (
            <h1>Select a team</h1>
          )}
        </div>
      )}
      {players && (
        <motion.table
          variants={mainPageVariants}
          initial="initial"
          animate="visible"
          className="main-page__players"
        >
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
        </motion.table>
      )}
    </motion.div>
  );
};

export default MainPage;
