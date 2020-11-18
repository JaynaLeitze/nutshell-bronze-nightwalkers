

//*create an event to target the new task button on the DOM*
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".taskContainer")

//*creates the button to render on the DOM*
export const taskButton = () => {
    contentTarget.innerHTML = `
      <button id="task--button">New Task</button>
      `
}
//*tells eventhub that when the button is clicked to listen for what comes next*
eventHub.addEventListener("click", event => {
    if (event.target.id === "task--button") {
        const newTaskClicked = new CustomEvent("NewTaskClicked")
        eventHub.dispatchEvent(newTaskClicked)
    }
})

//{ <button onclick="NewTaskClicked()"></button>;
// Completed: <input type="checkbox" id="checked">
//         function myFunction() {
//             const checkBox = document.getElementById("checked");
//             checkBox.checked = true;
//           } }