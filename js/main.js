function NewTask() {
    // Define variables
    var newTask = document.getElementById("new-task");

    // If "New Task" button selected
    if(document.getElementById("new")) {
        newTask.removeAttribute("hidden");
    }
}

function Cancel() {
    // Define variables
    var newTask = document.getElementById("new-task");

    // If "Cancel" button selected
    if(document.getElementById("cancel")) {
        newTask.style.opacity = '0.0';
    }
    
}