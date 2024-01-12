// FUNCITON: used to toggle between showing new task form and cancelling the form
function NewTask() {
    // Define variables
    var newTask = document.getElementById("new-task-section");
    var newCancelButton = document.getElementById("new-cancel-button");
    var hidden = newTask.getAttribute("hidden");
    var user = document.getElementById("user");
    var description = document.getElementById("desc");

    // If hidden
    if(hidden !== null) {
        newTask.removeAttribute("hidden");
        newCancelButton.innerText = "Cancel Task";
        newCancelButton.style.backgroundColor = "#ec7063";
    // else, if visible
    } else {
        newTask.setAttribute("hidden", "hidden");
        newCancelButton.innerText = "New Task";
        newCancelButton.style.backgroundColor = "#58d68d";
        // Clear the form fields
        user.value = "s";
        description.value = "";
    }
}

// FUNCTION: used to submit new task information
function SendData() {
    // Define variables
    var user = document.getElementById("user");
    var value = user.options[user.selectedIndex].text;
    var description = document.getElementById("desc").value;

    // If any values are incomplete
    if((value === "" || value == null) || (description == "" || description == null)) {
        alert("All fields required. Please fill in all fields.")
    }
}