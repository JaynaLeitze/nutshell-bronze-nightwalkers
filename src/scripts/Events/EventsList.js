import {
  deleteEvent,
  getEvents,
  useEventEntries,
  useEvents,
} from "./EventsProvider.js";
import { EventHTML } from "./EventsHTML.js";
import { getFriends, useFriends } from "../Friends/FriendsDataProvider.js";

const eventHub = document.querySelector(".dashboard");
const eventsContainer = document.querySelector(".eventListContainer");

export const EventList = () => {
  const activeUserId = parseInt(sessionStorage.getItem("activeUser"));
  getEvents()
    .then(getFriends)
    .then(() => {
      const friendships = useFriends()
        .filter((friend) => friend.activeUserId === activeUserId)
        .map((friendship) => friendship.userId);
      console.log(friendships);
      const events = useEventEntries().filter(
        (eventObj) =>
          eventObj.userId === activeUserId ||
          friendships.includes(eventObj.userId)
      );
      const arrayOfEvents = events.map((event) => {
        const eventHTMLRep = EventHTML(event);
        return eventHTMLRep;
      });
      const stringOfAll = arrayOfEvents.join("");
      eventsContainer.innerHTML = stringOfAll;
    });
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
