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

