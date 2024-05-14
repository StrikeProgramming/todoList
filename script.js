const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/*=============== FUNCTIONS ===============*/

const addTask = () => {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //Close Icon
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

/*=============== HANDLERS ===============*/

const handleListItem = (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
};

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

/*=============== EVENT LISTENERS ===============*/

listContainer.addEventListener("click", handleListItem);
