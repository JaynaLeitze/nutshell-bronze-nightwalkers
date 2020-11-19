
const eventHub = document.querySelector(".container")

//*Create a single task HTML representation after saving a task*
export const taskAsHTML = (taskObject) => {
    return `
    <div id="taskId" class="tasks">
        <h3>Task: ${taskObject.nameOfTask}</h3>
        <p>Complete by: ${taskObject.dateOfCompletion}</p>
        <input type="checkbox" id="checkBox" unchecked> Completed
        <button id="deleteTask--${taskObject.id}">Delete</button>
    </div>
    `

}

eventHub.addEventListener("checkBoxClicked", event => {
    const removeTask = document.getElementById("checkBox")
    if (event.checked === true) {
        taskId.style.display = "none"
    } else {
        taskId.style.display = "block"
    }
    const taskRemoved = new CustomEvent("removedTask")

        eventHub.dispatchEvent(taskRemoved)
})







//     const eventHub = document.querySelector(".container")
//     const contentTarget = document.querySelector("#checkBox")

//     eventHub.addEventListener("click", event => {
//         if (event.target.checked === "#checkBox") {
//             $(this).next().show();
//         } else {
//             $(this).next().hide();
//         }
//     })
//     eventHub.dispatchEvent(customEventCheckBox)
// }
//     })


// }

// $('#checkBox').change(function () {
//     if (this.checked) {
//         $(this).next().show();
//     } else {
//         $(this).next().hide();
//     }
// });



    // ${function //checkTheBox() {
    //     const checkBox = document.getElementById("checked");
    //     checkBox.checked = true;
    //   }
    // }

     // ${function checkBoxSelect() {
        //     const checkBox = document.createElement("checkbox");
        //     checkBox.setAttribute("type", "checkbox");
        //     document.body.appendChild(checkBox);
        //   }
        // }

    // <input type="checkbox" id="checkBox--${taskObject.id}"> Accept
    //         const cb = document.querySelector('#checkBox:checked') !== null