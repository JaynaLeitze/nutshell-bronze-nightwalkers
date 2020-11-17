import { getEvents, useEvents } from "./EventsProvider.js";
import { EventHTML } from "./EventsHTML.js";

const eventHub = document.querySelector(".dashboard");
const eventsContainer = document.querySelector(".eventListContainer");

export const EventList = () => {
  getEvents();
  const events = useEvents();
  const arrayOfEvents = events.map((event) => {
    const eventHTMLRep = EventHTML(event);
    return eventHTMLRep;
  });
  const stringOfAll = arrayOfEvents.join("");
  eventsContainer.innerHTML = stringOfAll;
};

eventHub.addEventListener("eventStateChanged", () => EventList());
