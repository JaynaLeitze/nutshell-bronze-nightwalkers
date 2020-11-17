//*Create a single task HTML representation after saving a task*
export const taskAsHTML = (taskObject) => {
    return `
    <div class="tasks">
        <h3>New Task</h3>
        <p>Task: ${taskObject.nameOfTask}</p>
        <p>Complete by: ${taskObject.dateOfCompletion}</p>
        <input type="checkbox" id="checkBox" unchecked> Completed

        <button id="deleteTask--${taskObject.id}">Delete</button>
    </div>
    `
    }




    // Completed: <input type="checkbox" id="checked">
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