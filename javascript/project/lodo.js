let arr = [];
let Generate = "";
let toolur = 0;
let task;
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
  let ner;
  ner = confirm("are you sure to delete that button");
  if (ner == true) {
    arr.splice(taskId, 1);
  }
  render();
  console.log(taskId);
};

function render() {
  const todoTasksElement = document.getElementById("TodoTask");
  const inprogressTasksElement = document.getElementById("InProgressTask");
  const stuckTasksElement = document.getElementById("StuckTask");
  const doneTasksElement = document.getElementById("DoneTask");

  const sorted = arr.sort((a, b) => {
    let ner = {
      Low: 3,
      Medium: 2,
      High: 1,
    };
    return ner[a.priority] - ner[b.priority];
  });

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
              <button class="right" onclick="removeTask(${i})">
              <img src="./close_FILL0_wght400_GRAD0_opsz24.png" alt="" />
            </button>
          </div>
        
        </div>
        <div class="flex" style="padding-left: 10px">
          <div id="description">${arr[i].tailbar}</div>
          <div class="end" style="margin-left: auto">
            <button class="right" onclick="upgrade(${i});">
              <img
                style="width: 17px"
                src="./edit_note_FILL0_wght400_GRAD0_opsz24.png"
                alt=""
              />
            </button>
           
          </div>
        </div>
        
          <div  class="Status";> ${arr[i].priority}</div>
        <div   style="padding-left: 10px; margin-top:5px;">
        <select style="border-radius:5px"   ,this.value)">
        <option ${arr[i].status === "To do" ? "selected" : ""}>To do</option>
        <option ${
          arr[i].status === "In Progress" ? "selected" : ""
        }>In Progress</option>
        <option ${arr[i].status === "Stuck" ? "selected" : ""}>Stuck</option>
        <option ${arr[i].status === "Done" ? "selected" : ""}>Done</option>
     </select>
        </div>
        <button onclick="changePosition(${i} )">up<button>
        <button onclick="changePosition(${i} )">down<button>
      
      </div>`;

    switch (arr[i].status) {
      case "To do":
        todoResult += Generate;
        break;
      case "In Progress":
        inprogressResult += Generate;
        break;
      case "Stuck":
        stuckResult += Generate;
        break;
      case "Done":
        doneResult += Generate;
        break;
    }
  }

  todoTasksElement.innerHTML = todoResult;
  inprogressTasksElement.innerHTML = inprogressResult;
  stuckTasksElement.innerHTML = stuckResult;
  doneTasksElement.innerHTML = doneResult;
}
function changeStatus(index, value) {
  arr[index].status = value;
  render();
  console.log();
}
function addTask() {
  arr.push({
    id: toolur++,
    title: input.value,
    tailbar: tailbar.value,
    priority: ShowStatus.value,
    status: priority.value,
    position: toolur++,
  });

  render();
  clear();
  none();
}
function changePosition(current, next) {}
function showModal() {
  click.style.display = "flex";
}
function none() {
  click.style.display = "none";
}
function update() {
  arr[task].tailbar = tailbar.value;
  arr[task].title = input.value;
  arr[task].priority = ShowStatus.value;
  arr[task].status = priority.value;
  render();
  none();
}
function upgrade(taskId) {
  showModal();
  input.value = arr[taskId].title;
  tailbar.value = arr[taskId].tailbar;
  task = taskId;
}
