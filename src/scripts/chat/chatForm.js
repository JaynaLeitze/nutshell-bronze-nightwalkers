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
    
       if (chatText !== "") {
           fetch(`http://localhost:8088/messages`)
            .then(response => response.json())
            .then(users => {
                if (users.length === 0) {
                    fetch("http://localhost:8088/messages", {
                        "method": "POST",
                        "headers": {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "chatText": chatText
                        
                        })
                    }) 
                    .then(response => response.json())
                        .then((newMessage) => {
                            sessionStorage.setItem("activeMessage", newMessage.id)

                            eventHub.dispatchEvent(new CustomEvent("messageSent"))
                        })
                 }
            })
    }   }
})     
