// Author: Susan Wiens
// This module creates a form for messages to be created.

export const generateChatForm = () => {
    const contentTarget = document.querySelector(".chatContainer")
    contentTarget.innerHTML = `
        <input id="chat-create-input"/>
        <button id="chat-create-button"> Send Message </button>
    `
}
