
let tasks = [];


function addTask(){
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if(task !== ""){
        tasks.push(task);
        input.value = "";
        console.log(tasks)
        displayTasks();
    }
}


function displayTasks(){
    const taskList = document.getElementById("taskList");

    let html = "";
    let i = 0;
    for (const task of tasks) {
        html += `
            <div class= "task-item">
                <span class = "task-text">${i+1}. ${task} </span>
                <div class = "button-group">
                    <button class = "edit-btn" onclick="editTask(${i})"> Edit </button>
                    <button class = "delete-btn" onclick="deleteTask(${i})"> delete </button>
                </div>
            </div>
        `;
        i++;
    }
    taskList.innerHTML = html;
    console.log(tasks);
}
/*     for(let i=0; i<tasks.length; i++){
    html += `
        <div class= "task-item">
            <span class = "task-text">${i+1}. ${tasks[i]} </span>
            <div class = "button-group">
                <button class = "edit-btn" onclick="editTask(${i})"> Edit </button>
                <button class = "delete-btn" onclick="deleteTask(${i})"> delete </button>
            </div>
        
        </div>
        
        `;

        


    }
    taskList.innerHTML = html;
    console.log(tasks);
} */
//rewrite above loop with for.of

function editTask(index){
    const newTask = prompt("Edit task:  ", tasks[index]);
    if(newTask !== null && newTask.trim() !== ""){
    tasks[index] = newTask;
    displayTasks();
    }

    console.log(tasks);
}



function deleteTask(index){
    tasks.splice(index,1);
    console.log(tasks);
    displayTasks();
}