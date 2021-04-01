import React, { useState } from "react";

const MainPage: React.FC = () => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  return (
    <div className="main-page">
      <h1>Teams</h1>
      <div className="main-page__teams"></div>
      <h1>Players</h1>
      <div className="main-page__players"></div>
    </div>
  );
};

export default MainPage;
