import { useTasks, getTasks, saveTask } from "./TaskProvider.js"

const contentTarget = document.querySelector(".taskContainer")
const eventHub = document.querySelector(".container")

    //*This creates the form field*
    const render = () => {
        eventHub.addEventListener("NewTaskClicked",() => {
            if ("NewTaskClicked") {
                return contentTarget.innerHTML = `
                <input type="text" id="taskName" placeholder="What is the task?"></input>
                <input type="date" id="completionDate"></input>
                <button id="saveTask">Save</button>
            `
            }
            console.log("RenderHTML", render)
            })
    }


//*This tells eventhub what to do when the save button is clicked*
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTask") {
        const nameOfTask = document.querySelector("#taskName").value
        const dateOfCompletion = document.querySelector("#completionDate").value
        //*Make a new object representation of a task(Key:Value pair)*
        const newTask = {
            nameOfTask,
            dateOfCompletion
        }

        //*Change API state and application state*
        saveTask(newTask)
    }
})

export const taskForm = () => {
    return render()    
}