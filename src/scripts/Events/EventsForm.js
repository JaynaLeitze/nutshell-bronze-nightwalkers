import { newEventButton } from "./EventButton.js";
import { useEvents, getEvents, saveEvent } from "./EventsProvider.js";

//create event form HTML with inputs and render form to DOM
//add click event for when user clicks save button
//save should grab values from form inputs, build new event object, and post to API

const contentTarget = document.querySelector(".eventContainer");
const eventHub = document.querySelector(".dashboard");

const render = () => {
  eventHub.addEventListener("eventButtonClicked", () => {
    // console.log(clickEvent, "event button clicked");
    if ("eventButtonClicked") {
      return (contentTarget.innerHTML = `
            <h3>New Event</h3>
            <div class="eventForm">
            <label for="event-name">Event Name</label>
            <input type="text" id="event-name"/>
            <label for="event-date">Event Date</label>
            <input type="date" id="event-date"/>
            <label for="event-location">Event Location</label>
            <input type="text" id="event-location"/>
            <button id ="saveEvent">Save Event</button>
            </div>
            `);
    }
  });
};

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveEvent") {
    //grab input values
    const eventName = document.querySelector("#event-name").value;
    const eventDate = document.querySelector("#event-date").value;
    const eventLocation = document.querySelector("#event-location").value;

    //make new event
    const newEvent = {
      eventName,
      eventDate,
      eventLocation,
    };
    console.log(newEvent);
    //Post object to database
    saveEvent(newEvent);
    EventForm();
  }
});
export const EventForm = () => {
  return render();
};
