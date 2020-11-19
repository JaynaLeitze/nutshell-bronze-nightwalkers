const eventHub = document.querySelector(".dashboard");

let friends = [];

export const useFriends = () => {
  return friends.slice();
};

const dispatchStateChangeEvent = () => {
  const friendStateChangedEvent = new CustomEvent("friendStateChanged");

  eventHub.dispatchEvent(friendStateChangedEvent);
};

export const getFriends = () => {
  return (
    fetch(`http://localhost:8088/friends`)
      .then((response) => response.json())
      //do something with the data
      .then((parsedFriends) => {
        friends = parsedFriends;
      })
  );
};
