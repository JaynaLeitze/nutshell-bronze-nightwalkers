const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".eventContainer");

export const newEventButton = () => {
  contentTarget.innerHTML = `
    <button id="new-event-button">Add New Event</button>
    `;
};

eventHub.addEventListener("click", (eventObj) => {
  if (eventObj.target.id === "new-event-button") {
    const nutshellEvent = new CustomEvent("eventButtonClicked");

    eventHub.dispatchEvent(nutshellEvent);
  }
});
