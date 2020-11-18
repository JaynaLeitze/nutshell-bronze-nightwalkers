//Author: Susan Wiens
// html format of what the message should look like
// should accept one parameter which is messageObject

export const generateMessageHtmlcreate  = (messageObject) => {
    return `
        <div class="single-message">
            ${messageObject.chatText}
        </div>
    `
}