let article = []

export const useArticles = () =>{
   return article.slice()
}
export const getArticles = (userId) =>{
    // debugger
    return fetch(`http://localhost:8088/articles?userId=${userId}`)
    .then(response => response.json())
    .then(parsedArticles =>{
       article=parsedArticles
        // console.log(parsedArticles)
    })
}

// post method for fetching data

const eventHub = document.querySelector(".dashboard")

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

// delete button
export const deleteArticle = articleId => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "DELETE"
    })
        .then(getArticles)
}

// sorting in descending order

export const useArticlentries = () =>{
    const sortedByDate = article.sort(
        (currentEntry,nextEntry) =>
        nextEntry.timestamp-currentEntry.timestamp
        ) 
    return sortedByDate;
}

























