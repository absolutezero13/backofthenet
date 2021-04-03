import React from "react";

const Player: React.FC<any> = ({ player }) => {
  const borderStyles = {
    borderColor:
      player.role.code3 === "FWD"
        ? "#25aefe"
        : player.role.code3 === "DEF"
        ? "#0ea90b"
        : player.role.code3 === "MID"
        ? "#ffa515"
        : "#c5312d",
  };

  const year = new Date().toISOString().slice(0, 4);

  return (
    <tr className="player">
      <td>
        <img style={borderStyles} src={player.image} alt={player.shortName} />
      </td>
      <td>
        <p>{player.birthArea.name}</p>
      </td>
      <td>
        <p>
          {player.firstName.length + player.lastName.length >= 20
            ? player.shortName
            : player.firstName + " " + player.lastName}
        </p>
      </td>
      <td>
        <p>{player.birthDate ? +year - +player.birthDate.slice(0, 4) : "-"}</p>
      </td>

      <td>
        <p>{player.foot ? player.foot : "-"}</p>
      </td>
    </tr>
  );
};

export default Player;
