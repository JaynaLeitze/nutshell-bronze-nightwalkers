const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateChanged")

    eventHub.dispatchEvent(taskStateChangedEvent)
}

//*create an empty array to hold what is fetched from json*
let tasks = []
//*gets the information stores within an array from json*
export const getTasks = (userId) => {

    return fetch(`http://localhost:8088/tasks?userId=${userId}`, {
        method: "GET"

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

//*this will add the new information filled out in the form to the json server*
export const saveTask = task => {
    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
        .then(getTasks)
        //*This tells the DOM to update without refreshing*
        .then(dispatchStateChangeEvent)
}

//*this will delete the information from json server*
export const deleteTask = task => {
    return fetch(`http://localhost:8088/tasks/${task}`, {
        method: "DELETE"
    })
        .then(getTasks)
        //*This tells the DOM to update without refreshing*
        .then(dispatchStateChangeEvent)
}