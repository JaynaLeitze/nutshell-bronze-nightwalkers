export const EventHTML = (eventObj) => {
  return `
    <h3>Events</h3>
    <div class="eventContent">
    <p class="event__name"> What: ${eventObj.eventName}<br>
    <p class="event__date"> When: ${eventObj.eventDate}<br>
    <p class="event__location"> Where: ${eventObj.eventLocation}</p>
    <button id="deleteEvent--${eventObj.id}">Delete</button>
    <hr>
    </div>
    `;
};
