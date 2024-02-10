const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("Please enter the task!")
    } else{
        let tasks = document.createElement("li");
        tasks.innerText = inputBox.value;
        listContainer.append(tasks);
        let removeTask = document.createElement("span");
        removeTask.innerHTML = "\u00d7";
        tasks.append(removeTask);
    }
    inputBox.value = "";
    saveData();
}

function checkUncheckOrRemoveTask(){
    listContainer.addEventListener("click", function(details){
        if(details.target.tagName === "LI"){
            details.target.classList.toggle("checked");
            saveData();
        }
        else if(details.target.tagName === "SPAN"){
            details.target.parentElement.remove();
            saveData();
        }
    })
}

function saveData(){
    localStorage.setItem("storedData", listContainer.innerHTML);
}

function showStoredData(){
    listContainer.innerHTML = localStorage.getItem("storedData");
}

checkUncheckOrRemoveTask();
showStoredData();
