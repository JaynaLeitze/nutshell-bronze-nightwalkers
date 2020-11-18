import { deleteEvent, getEvents, useEvents } from "./EventsProvider.js";
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

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("deleteEvent--")) {
    const [prefix, id] = clickEvent.target.id.split("--");
    console.log("button was clicked");

    /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
    deleteEvent(id).then(() => {
      EventList();
    });
  }
});
