const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("Task is empty");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        
    }
    saveData()
}, false);

function saveData(){
    localStorage.setItem("toDoSavedData", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("toDoSavedData");
}
showTask();