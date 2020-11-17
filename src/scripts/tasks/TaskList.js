import { getTasks, useTasks } from "./TaskProvider.js"
import { taskAsHTML } from './Task.js'

const taskContainer = document.querySelector(".taskList")
const eventHub = document.querySelector(".container")

// eventHub.addEventListener("NewTaskClicked", () => {

//     TaskList()
//   })

export const TaskList = () => {
    getTasks().then(() => {

       const taskCollection = useTasks()
       render(taskCollection)
    })
}

    const render = (taskCollection) => {
       let taskHTMLRepresentation = ""
        for (const task of taskCollection) {

            taskHTMLRepresentation += taskAsHTML(task)

            taskContainer.innerHTML = `
        <section class="taskList">
            ${taskHTMLRepresentation}
        </section>
        `
        }
}