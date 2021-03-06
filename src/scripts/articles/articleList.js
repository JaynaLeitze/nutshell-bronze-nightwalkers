import {useArticles,getArticles} from "./articleprovider.js"
import {articleCard} from"./article.js"
import {deleteArticle} from"./articleprovider.js"
import {useArticlentries} from "./articleprovider.js"

const eventHub = document.querySelector(".dashboard")
const contentTarget = document.querySelector(".articlelistcontainer")
// getting data from api

export const articleList = () =>{
    const userId = sessionStorage.getItem("activeUser")
    getArticles(userId)
    .then(() =>{
        const articles = useArticlentries()
        render(articles)
    })
}

// responding to CustomEvent from Provider.js

eventHub.addEventListener("articlechanged",() =>articleList())

// rendering & putting into Dom

const render = (articleArray) =>{
    let articleHTML = ""
    for(const news of articleArray){
        articleHTML += articleCard(news)
    }
    contentTarget.innerHTML = `
     <h2> NEWS ARTICLES </H2>
      ${articleHTML}`
    }

// making clickEvent for deletebutton

eventHub.addEventListener("click",clickEvent =>{
    if(clickEvent.target.id.startsWith("deleteArticle--")){
    const[prefix,id] = clickEvent.target.id.split("--")

    deleteArticle(id).then(()=>{
            const updatedarticles = useArticles() 
            render(updatedarticles)
        })
    }
})