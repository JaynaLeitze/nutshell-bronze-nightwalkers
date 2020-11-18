import {} from "../Settings.js";

let weather = {};

export const useWeather = () => weather;

export const getWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=36.1627&lon=-86.7816&units=imperial&exclude=current,minutely,hourly&appid=${weatherKey}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((parsedWeather) => {
      Object.assign(weather, parsedWeather);
    });
};
