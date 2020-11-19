import { getTasks, useTasks, deleteTask } from "./TaskProvider.js";
import { taskAsHTML } from "./Task.js";

const taskContainer = document.querySelector(".taskList");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("taskStateChanged", () => {
  TaskList();
});

export const TaskList = () => {
    const activeUserId = sessionStorage.getItem("activeUser")
    getTasks(activeUserId).then(() => {

        const taskCollection = useTasks()
        render(taskCollection)
    })
}

//*render to the DOM*
const render = (taskCollection) => {
  let taskHTMLRepresentation = "";
  for (const task of taskCollection) {
    //*takes the single html representation*
    taskHTMLRepresentation += taskAsHTML(task);
  }
  //*this needs to be outside the bracket or the for loop won't complete*
  taskContainer.innerHTML = `

        <section class="taskList">
            ${taskHTMLRepresentation}
        </section>
        `;
};

eventHub.addEventListener("click", (clickEvent) => {
  console.log(clickEvent, "id");
  if (clickEvent.target.id.startsWith("deleteTask--")) {
    const [prefix, id] = clickEvent.target.id.split("--");

    /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useTasks() and render the note list again.
        */
    deleteTask(id);
  }
});
