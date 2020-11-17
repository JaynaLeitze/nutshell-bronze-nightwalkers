const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateChanged")

    eventHub.dispatchEvent(taskStateChangedEvent)
}

//*create an empty array to hold what is fetched from json*
let tasks = []
//*gets the information stores within an array from json*
export const getTasks = () => {
    return fetch('http://localhost:8088/tasks',{
        method : "GET"
    })
        //*create a promise to give this fetched data when called later*
        .then(response => response.json())
        .then(parsedTasks => {
            tasks = parsedTasks
            //console.log("task array", tasks)
        })
}
//*creates a copy of the array for use later when called by another function*
export const useTasks = () => {
    return tasks.slice()
}

export const saveTask = task => {
    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}

export const deleteTask = taskId => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
        .then(getTasks)
}