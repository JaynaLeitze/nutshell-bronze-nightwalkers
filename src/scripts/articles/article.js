export const articleCard = (articleObj) =>{
    return `
    <section class="articles">
   <h4>Title: ${articleObj.title}</h4>
    <p> Url: ${articleObj.url}</p>
    <p> Synopsis: ${articleObj.synopsis}</p>
   <p> timestamp: ${new Date(articleObj.timestamp).toLocaleDateString('en-US')}</p>
    <button id="deleteArticle--${articleObj.id}">Delete</button>
   </section> `
}