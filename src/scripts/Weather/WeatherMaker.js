import { useEvents } from "../Events/EventsProvider.js";
import { getWeather, useWeather } from "./WeatherProvider.js";
const eventHub = document.querySelector(".dashboard");
const weatherClicked = document.querySelector(".showWeather");

export const showWeather = () => {
  weatherClicked;
};

export const weatherMaker = () => {
  getWeather().then(() => {
    const eventWeather = useWeather();
    const htmlTarget = document.querySelector(".weatherDisplay");
    const fiveDayWeather = eventWeather.daily.slice(0, 5);
    console.log(fiveDayWeather);
    const weatherHTML = fiveDayWeather
      .map((day) => {
        const datept1 = day.dt * 1000;
        const humanDate = new Date(datept1);
        const condensedDate = humanDate.toLocaleDateString("en-US", {
          month: "numeric",
          day: "numeric",
          year: "numeric",
        });
        const high = day.temp.max;
        const low = day.temp.min;
        const precip = day.weather[0].description;
        const iconAddress = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
        return `
                <div class="weatherDay">
                    <img src="${iconAddress}">
                    <p class="date">${condensedDate}</p>
                    <p class="highTemp">High: ${high}</p>
                    <p class="lowTemp">Low: ${low}</p>
                    <p class="rainCondition">Forecast: ${precip}</p>
                </div>
            `;
      })
      .join("");

    htmlTarget.innerHTML = weatherHTML;
  });
};
