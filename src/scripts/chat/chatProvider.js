// Author: Susan Wiens
//fetch messages from database 
// funciton to use the messages in other files
// export functions of the array and copyof the array

let messages = []

export const getMessages = () => {
    return fetch("http://localhost:8088/messages")
    .then(response => response.json())
    .then(parsedMessages => {
        messages = parsedMessages
    }) 
}

export const useMessages = () => {
    return messages.slice()
}