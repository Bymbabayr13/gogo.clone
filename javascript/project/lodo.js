
let arr = []
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
let currentTarget = "";
const clear = () => {
  input.value = "";
  tailbar.value = "";

};
const removeTask = (taskId) => {
  document.getElementById(taskId).remove();
  alert("asdfasf");
};


function render (){
  const display = document.getElementById(currentTarget)
for(let i=0; i<arr.length; i++){
  let result= ""
  let arrs = arr[i]
  const Generate = `
  <div  class="box-1-1" id="task-${arrs.id}">
        <div class="flex" style="padding-left: 10px">
          <button class="right">
            <img src="./done_FILL0_wght400_GRAD0_opsz24.png" alt="" />
          </button>
          <div id="garalt" style="margin-bottom:5px">${arrs.title}</div>
          <div   class="end" style="margin-left: auto">
            <button class="right" onclick="removeTask('task-${arr.id}')">
              <img src="./close_FILL0_wght400_GRAD0_opsz24.png" alt="" />
            </button>
          </div>
        
        </div>
        <div class="flex" style="padding-left: 10px">
          <div id="description">${arrs.tailbar}</div>
          
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
        
          <div  class="Status";> ${arrs.priority}</div>
        
        <div style="padding-left: 10px"></div>
      </div>`;
    result +=Generate
  
  
}

display.innerHTML += result
}
function addTask() {
    arr.push = [{
      id:toolur++,
      title:input,
      tailbar:tailbar,
      priority:ShowStatus
    }]
    console.log(result)

    // click.style.display = "flex";
    render(); 
    clear();
    none();
   
  

  console.log();
}
function showModal(TargetId) {
  click.style.display = "flex";
  currentTarget = TargetId;
}
function none() {
  click.style.display = "none";
}
console.log(Generate)
render();



