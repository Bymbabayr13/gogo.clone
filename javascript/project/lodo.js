let arr = [];
let Generate = "";
let toolur = 0;
const commit = document.getElementById("commit");
const input = document.getElementById("input");
const result = document.getElementById("garalt");
const desc = document.getElementById("description");
const tailbar = document.getElementById("tailbar");

const Status = document.getElementById("Status");
const ShowStatus = document.getElementById("ShowStatus");
const priority = document.getElementById("TaskPriority");
const click = document.getElementById("modal");

let currentTarget = "";
const clear = () => {
  input.value = "";
  tailbar.value = "";
};
const removeTask = (taskId) => {
  arr.splice(taskId, 1);
  alert("asdaf");
  render();
  console.log(taskId);
};

function render() {
  const todoTasksElement = document.getElementById("TodoTask");
  const inprogressTasksElement = document.getElementById("InprogressTask");
  const stuckTasksElement = document.getElementById("StuckTask");
  const doneTasksElement = document.getElementById("DoneTask");

  let todoResult = "";
  let inprogressResult = "";
  let stuckResult = "";
  let doneResult = "";

  let result = "";
  for (let i = 0; i < arr.length; i++) {
    const Generate = `
  <div  class="box-1-1" id="task-${arr[i].id}">
        <div class="flex" style="padding-left: 10px">
          <button class="right">
            <img src="./done_FILL0_wght400_GRAD0_opsz24.png" alt="" />
          </button>
          <div id="garalt" style="margin-bottom:5px">${arr[i].title}</div>
          <div   class="end" style="margin-left: auto">
            <button class="right" onclick="removeTask('task-${i}')">
              <img src="./close_FILL0_wght400_GRAD0_opsz24.png" alt="" />
            </button>
          </div>
        
        </div>
        <div class="flex" style="padding-left: 10px">
          <div id="description">${arr[i].tailbar}</div>
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
        
          <div  class="Status";> ${arr[i].priority.value}</div>
        <div style="padding-left: 10px"></div>
      </div>`;
    result = Generate;

    switch (arr.status) {
      case "To do":
        todoResult += result;
        break;
      case "In progress":
        inprogressResult += result;
        break;
      case "Stuck":
        stuckResult += result;
        break;
      case "Done":
        doneResult += result;
        break;
    }
  }

  todoTasksElement.innerHTML += todoResult;
  inprogressTasksElement.innerHTML += inprogressResult;
  stuckTasksElement.innerHTML += stuckResult;
  doneTasksElement.innerHTML += doneResult;
}

function addTask() {
  arr.push({
    id: toolur++,
    title: input.value,
    tailbar: tailbar.value,
    priority: ShowStatus.value,
    status: priority.value,
  });
  console.log(arr);

  render();
  clear();
  none();
}
function showModal() {
  click.style.display = "flex";
}
function none() {
  click.style.display = "none";
}
