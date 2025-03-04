const inputBox = document.getElementById("task");
const listContainer = document.getElementById("list");

function addTask() {

    if (inputBox.value === '') {
        alert("You must write something !");

    }
    else {

        let li = document.createElement("div");
        li.innerHTML = '<p>' + inputBox.value + '</p>' + '<button class="delete">Delete</button>';
        listContainer.appendChild(li);

        li.setAttribute("class", "TaskList");

    }


    const deleteButtons = document.getElementsByClassName("delete");
    for (let button of deleteButtons) {
        button.addEventListener("click", remove);
    }

    function remove(event) {

        const taskElement = event.target.closest(".TaskList");
        if (taskElement) {
            taskElement.remove();
        }
    }

}
