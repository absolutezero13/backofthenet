import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

import React from "react";
import { render } from "@testing-library/react";
import MainPage from "../Components/MainPage";
import fetch from "jest-fetch-mock";

test("renders with teams", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({ teams: [{ name: "Barcelona", icon: "barcelona.png" }] })
  );

  const { findByText } = render(<MainPage />);
  const team = await findByText("Barcelona");
  // const team2 = await findByText("Gaziantep");
  expect(team).toBeInTheDocument();
  // expect(team2).toBeInTheDocument();
  // expect(fetch).toHaveBeenCalledTimes(1);
  // expect(fetch).toHaveBeenLastCalledWith(
  //   "https://mock-foooty-api.herokuapp.com/teams"
  // );
});

// test("catches errors and returns", async () => {
//   const teams = render(<MainPage />);
// });
