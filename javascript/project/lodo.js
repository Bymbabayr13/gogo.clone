let task = []
let Generate = "";
let toolur = 0;
const commit = document.getElementById("commit");
const input = document.getElementById("input");
const result = document.getElementById("garalt");
const desc = document.getElementById("description");
const tailbar = document.getElementById("tailbar");
const Status = document.getElementById("Status");
const ShowStatus = document.getElementById("ShowStatus");
const priority = document.getElementById("TaskPriority").value;
const click = document.getElementById("modal");


const todoTasksElement = document.getElementById("TodoTasks");
const inprogressTasksElement = document.getElementById("InprogressTasks");
const stuckTasksElement = document.getElementById("StuckTasks");
const doneTasksElement = document.getElementById("DoneTasks");
const clear = () => {
  input.value = "";
  tailbar.value = "";
  let currentTarget = "";
};
const removeTask = (taskId) => {
  document.getElementById(taskId).remove();
};
function addTask() {
  task = [{
    id:toolur++,
    title:input.value,
    tailbar:tailbar.value,
    priority:ShowStatus.value
  }]

  render()
  clear();
  none();
  console.log(display)
}








function render(){
 
  for(let i = 0 ; i <task.length; i++){
    let tasks = task[i]
    if (task.input == "" && task.tailbar == "") {
      click.style.display = "flex";
      alert("utga oruul");
    } else {
      const Generate = `
        <div  class="box-1-1" id="task-${tasks.id}">
        <div class="flex" style="padding-left: 10px">
          <button class="right">
            <img src="./done_FILL0_wght400_GRAD0_opsz24.png" alt="" />
          </button>
          <div id="garalt" style="margin-bottom:5px">${tasks.title}</div>
  
          <div   class="end" style="margin-left: auto">
            <button class="right" onclick="removeTask('task-${tasks.id}')">
              <img src="./close_FILL0_wght400_GRAD0_opsz24.png" alt="" />
            </button>
          </div>
        
        </div>
        <div class="flex" style="padding-left: 10px">
          <div id="description">${tasks.tailbar}</div>
          
          <div class="end" style="margin-left: auto">
            <button class="right">
              <img
                style="width: 17px"
                src="./edit_note_FILL0_wght400_GRAD0_opsz24.png"
                alt=""
              />
            </button>
           
          </div>
        </div>
        
          <div  class="Status";> ${tasks.priority}</div>
        
        <div style="padding-left: 10px"></div>
      </div>`;
  }
}


  console.log();
}
function showModal(TargetId) {
  click.style.display = "flex";
  currentTarget = TargetId;
}
function none() {
  click.style.display = "none";
}