// Author: Susan Wiens
// This module creates a form for messages to be created.

const eventhub = document.querySelector(".container")


export const generateChatForm = () => {
    const contentTarget = document.querySelector(".chatContainer")
    contentTarget.innerHTML = `
        <input id="chat-create-input"/>
        <button id="chat-create-button"> Send Message </button>
    `
}

eventhub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id === "chat-create-button") {
        const chatText = document.querySelector("#chat-create-input").value
        const activeUserId = sessionStorage.getItem("activeUser")
    
        if (chatText !== "") {
            return fetch("http://localhost:8088/messages", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "chatText": chatText,
                    "timeStamp": Date.now(),
                    "userId": +activeUserId
                })
            })  .then(() => {
                const messageDataChange = new CustomEvent("messageDataChange")
            eventhub.dispatchEvent(messageDataChange)
            })
        }           
    } 
})     
