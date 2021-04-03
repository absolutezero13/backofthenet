import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import { getTeams } from "../Utils/getData";
import React from "react";
import { render } from "@testing-library/react";
import MainPage from "../Components/MainPage";
import fetch from "jest-fetch-mock";

beforeEach(() => {
  fetch.resetMocks();
});

test("fetch teams correctly", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({ teams: [{ name: "Barcelona", icon: "barcelona.png" }] })
  );

  const teams = await getTeams();
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(teams[0].name).toEqual("Barcelona");
  expect(fetch).toHaveBeenLastCalledWith(
    "https://mock-foooty-api.herokuapp.com/teams"
  );
});

test("catches errors and returns null", async () => {
  fetch.mockReject((): any => "Api fails");

  const teams = await getTeams();
  expect(teams).toEqual(null);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenLastCalledWith(
    "https://mock-foooty-api.herokuapp.com/teams"
  );
});
