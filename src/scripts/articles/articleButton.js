const eventHub=document.querySelector(".dashboard")
const contentTarget=document.querySelector(".NewButton")

export const articleButton = ()=>{
    contentTarget.innerHTML +=`
    <div class="NewButton">
    <button id="articlebutton">Article Statements</button>
    </div>
    `}

    eventHub.addEventListener("click",clickEvent =>{
        if(clickEvent.target.id === "articlebutton"){
        const articlebutton =  new CustomEvent("newbuttonclicked")
        
        eventHub.dispatchEvent(articlebutton)
        }
    })
