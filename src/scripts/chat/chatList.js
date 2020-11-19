// Author: Susan Wiens
// this will fetch messages 
// and display them to the DOM
// example innerHTML


import {getMessages, useMessages} from "./chatProvider.js"
import {generateMessageHtml} from "./chat.js"
export const chatList = () => {
    getMessages()
        .then(() => {
            const messages = useMessages()
            render(messages)
        })
}

const render = (messages) => {
    const contentTarget = document.querySelector(".chatListContainer")
    let messagesAsHtml = ""
    messages.forEach((currentMessage) => {
        messagesAsHtml += generateMessageHtml(currentMessage)
    })
    contentTarget.innerHTML = messagesAsHtml
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("messageDataChange", () => {
    chatList()
})