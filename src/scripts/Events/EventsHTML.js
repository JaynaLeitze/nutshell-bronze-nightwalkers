export const EventHTML = (eventObj) => {
  return `
    <h3>Events</h3>
    <div class="eventContent">
    <h5 class="event__name"> ${eventObj.eventName}</h5>
    <h5 class="event__date"> When? ${eventObj.eventDate}</h5>
    <h5 class="event__location> Where? ${eventObj.eventDate}</h5>
    </div>
    `;
};
