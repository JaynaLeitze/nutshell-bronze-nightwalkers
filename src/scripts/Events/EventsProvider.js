const eventHub = document.querySelector(".dashboard");

let events = [];

export const useEvents = () => {
  return events.slice();
};

const dispatchStateChangeEvent = () => {
  const eventStateChangedEvent = new CustomEvent("eventStateChanged");

  eventHub.dispatchEvent(eventStateChangedEvent);
};

export const getEvents = () => {
  return (
    fetch(`http://localhost:8088/events`)
      .then((response) => response.json())
      //do something with the data
      .then((parsedEvents) => {
        events = parsedEvents;
      })
  );
};

export const saveEvent = (event) => {
  return fetch("http://localhost:8088/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then(getEvents)
    .then(dispatchStateChangeEvent);
};

export const deleteEvent = (eventId) => {
  return fetch(`http://localhost:8088/events/${eventId}`, {
    method: "DELETE",
  }).then(getEvents);
};
