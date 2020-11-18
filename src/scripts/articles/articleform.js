import {saveArticle} from"./articleprovider.js"

const contentTarget =  document.querySelector(".articleContainer")
const eventHub = document.querySelector(".dashboard")

// get the articlesdata from getarticles,useArticles
export const articleForm = () =>{
    return   render()
}

// rendering & putting it into DOM
//  responding to custom Event for newarticle button

const render = () =>{
    eventHub.addEventListener("newbuttonclicked",() => { 
    if("newbuttonclicked"){
    return  contentTarget.innerHTML = `
  <input id="articleTitle" type="text"  placeholder="Your Title"/>
  <input id ="articleSynopsis" type="text" placeholder="Your synopsis"/>
  <input id ="articleUrl" type ="url"  placeholder="Enter your URL"/>
  
  <button id="saveArticle">Save Article</button>`
} 
})
}

// creating a Web browser event for savebutton
eventHub.addEventListener("click",clickEvent =>{
    if(clickEvent.target.id === "saveArticle"){

    // grab all the input values
const title =  document.querySelector("#articleTitle").value
const Synopsis =document.querySelector("#articleSynopsis").value
const link =  document.querySelector("#articleUrl").value
    
// make a object

const newArticle = {
     title,
    Synopsis,
    link
}

// send object to database
saveArticle(newArticle)
}
})




