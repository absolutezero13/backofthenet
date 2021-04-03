export const getTeams = async () => {
  try {
    const data = await fetch("https://mock-foooty-api.herokuapp.com/teams");
    const res = await data.json();
    return res.teams;
  } catch (err) {
    return null;
  }
};
export const getPlayers = async (id: number) => {
  try {
    const data = await fetch(
      `https://mock-foooty-api.herokuapp.com/teams/${id}/players`
    );
    const res = await data.json();
    return res.players;
  } catch (err) {
    return null;
  }
};
