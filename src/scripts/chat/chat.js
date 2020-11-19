//Author: Susan Wiens
// html format of what the message should look like
// should accept one parameter which is messageObject

export const generateMessageHtml= (messageObject) => {
import {getMessages} from "./chatProvider.js"

export const generateMessageHtml = (messageObject) => {
    return `
        <div class="single-message">
            ${messageObject.chatText}
            <button id="deleteMessage--${messageObject.id}">Delete</button>
        </div>
    `
}

const eventhub = document.querySelector(".container")

eventhub.addEventListener("click", eventObject => {
    const deleteId = eventObject.target.id.split("--") //deleteMessage--1
    if (deleteId[0] === "deleteMessage") {
      return fetch(`http://localhost:8088/messages/${deleteId[1]}`, {
            method: "DELETE"
        }).then(() => {
            const messageDataChange = new CustomEvent("messageDataChange")
            eventhub.dispatchEvent(messageDataChange)
        })
            
        
    }
})  