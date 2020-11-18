export const articleCard = (articleObj) =>{
    return `
    <section class="articles">
    <p> id: ${articleObj.id}</p>
    <p> userId: ${articleObj.userId}</p>
    <h4>Title: ${articleObj.title}</h4>
    <p> Url: ${articleObj.url}</p>
    <p> Synopsis: ${articleObj.synopsis}</p>
    <p> Date: ${articleObj.date} </p>
    <p> timestamp: ${new Date(articleObj.timestamp).toLocaleDateString('en-US')}</p>
    <button id="deleteArticle--${articleObj.id}">Delete</button>
   </section> `
}