//*Create a single task HTML representation after saving a task*
export const taskAsHTML = (taskObject) => {
    return `
    <div class="tasks">
        <h3>New Task</h3>
        <p>Task Name: ${taskObject.name}</p>
        <p>Completion Date: ${taskObject.complete}</p>
        <button id="deleteTask--${taskObject.id}">Delete</button>
    </div>
    `
    }