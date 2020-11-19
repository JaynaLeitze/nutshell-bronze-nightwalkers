import { taskButton } from "./tasks/TaskButton.js";
import { taskForm } from "./tasks/TaskForm.js";
//import { getTasks } from "./tasks/TaskProvider.js";
import { TaskList } from "./tasks/TaskList.js";
import { useArticles, getArticles } from "./articles/articleprovider.js";
import { articleList } from "./articles/articleList.js";
import { articleForm } from "./articles/articleform.js";
import { articleButton } from "./articles/articleButton.js";
import { newEventButton } from "./Events/EventButton.js";
import { EventForm } from "./Events/EventsForm.js";
import { EventList } from "./Events/EventsList.js";
// import { getEvents } from "./Events/EventsProvider.js";
import { generateChatForm } from "./chat/chatForm.js";
import { chatList } from "./chat/chatList.js";

export const Nutshell = () => {
  // Render all your UI components here
  taskButton();
  taskForm();
  TaskList();
  articleList();
  articleForm();
  articleButton();
  newEventButton();
  EventForm();
  EventList();
  getArticles().then(useArticles);
  generateChatForm();
  chatList();
};

const eventHub = document.querySelector(".container");

eventHub.addEventListener("userAuthenticated", (e) => {
  Nutshell();
});
