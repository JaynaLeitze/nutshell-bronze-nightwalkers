import {getArticles,useArticles} from"./articleprovider.js"

const contentTarget =  document.querySelector(".articleContainer")
const eventHub = document.querySelector(".container")

// get the articlesdata from getarticles,useArticles
export const articleForm = () =>{
    getArticles()
    .then(()=>{
        const articles = useArticles()
        render(articles)
    })
}

// rendering & putting it into DOM

const render = (articles) =>{
  contentTarget.innerHTML = `
  <input id="articleTitle" type="text"  placeholder="Your Title"/>
  <input id ="articleSynopsis" type="text" placeholder="Your text"/>
  <p> id ="articleUrl" type ="url" Enter your URL</p>
  
  <button id="saveArticle">Save Article</button>`
}

// creating a Web browser event
eventHub.addEventListener("click",clickEvent =>{
    if(clickEvent.target.id === "saveArticle")

    // grab all the input values
const Title =  document.querySelector("#articleTitle")
const Synopsis =document.querySelector("#articleSynopsis")
const link =  document.querySelector("#articleUrl")
})
// make a object

const newArticle = {
    title= Title,
    synopsis=Synopsis,
    url =link
}

// send object to database
saveArticle(newArticle)



