let article = []

export const useArticles = () =>{
   return article.slice()
}
export const getArticles = () =>{
    // debugger
    return fetch("http://localhost:8088/articles")
    .then(response => response.json())
    .then(parsedArticles =>{
       article=parsedArticles
        // console.log(parsedArticles)
    })
}

// post method for fetching data

export const saveArticle = (article) =>{
    return fetch("http://localhost:8088/articles",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent)
}

// dispatching to EventHub
const dispatchStateChangeEvent = () =>{
    const changeEvent =  new CustomEvent ("articlechanged")
    eventHub.dispatchEvent(changeEvent)
}


























// <button id="deleteNote--${noteObj.id}">Delete</button>