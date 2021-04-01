import React from "react";

const Player: React.FC<any> = ({ player }) => {
  return (
    <div className="player">
      <img src="" alt="" />
      <div className="player__country">
        <p>{player.birthArea.name}</p>
      </div>
      <p>Full name</p>
      <p>Age</p>
      <p>Foot</p>
    </div>
  );
};

export default Player;
