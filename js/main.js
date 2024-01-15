// GLOBAL: Define timer variables
var startButton = document.getElementById("start"); 
var stopButton = document.getElementById("stop"); 
var resetButton = document.getElementById("reset"); 
var completeButton = document.getElementById("complete");
var newTaskButton = document.getElementById("new-task-button");
var cancelTaskButton = document.getElementById("cancel-task-button");
var deleteButton = document.getElementById("delete");
var actionButtonRow;
var hour = 0, minute = 0, second = 0;

// GLOBAL: Add event listeners for the timer buttons
startButton.addEventListener('click', function() { 
    timer = true; 
    timerUtility(); 
}); 

stopButton.addEventListener('click', function() { 
    timer = false; 
    timerUtility();
}); 

resetButton.addEventListener('click', function() { 
    timer = false; 
    // Reset all values back to zero
    hour = 0; 
    minute = 0; 
    second = 0; 
    // Display the zeroes
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
}); 

completeButton.addEventListener('click', function() {
    timer = false;
    // Reset all values back to zero
    hour = 0;
    minute = 0;
    second = 0;
    // Display the zeroes
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 

    // Hide/show buttons
    cancelTaskButton.style.display = "none";
    newTaskButton.style.display = "inline-block";
})

newTaskButton.addEventListener('click', function() {
    timer = false;
    newTaskButton.style.display = "none";
    cancelTaskButton.style.display = "inline-block";
    deleteButton.style.display = "none";
})

cancelTaskButton.addEventListener('click', function() {
    timer = false;
    cancelTaskButton.style.display = "none";
    newTaskButton.style.display = "inline-block";
    var tableRow = document.getElementById("table-row");
    tableRow.hidden = true;

    // Reset all values
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById("task-description").innerHTML = "";
    // Display the zeroes
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
})

deleteButton.addEventListener('click', function() {
    timer = false;
    // actionButtonRow.deleteRow();
    console.log("hello there");
})

// FUNCTION: used to operate the stopwatch timers
function timerUtility() { 

    // If timer is activated
    if (timer) { 

        // If the seconds are exactly 60, increase minute, reset second
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 

        // If the minutes are exactly 60, increase hour, reset rest
        if (minute == 60) { 
            hour++; 
            minute = 0; 
            second = 0; 
        } 

        // Define display variables
        var hrDisplay = hour; 
        var minDisplay = minute; 
        var secDisplay = second; 

        // Display the results
        if (hour < 10) { 
            hrDisplay = "0" + hrDisplay; 
        } 

        if (minute < 10) { 
            minDisplay = "0" + minDisplay; 
        } 

        if (second < 10) { 
            secDisplay = "0" + secDisplay; 
        } 

        second++;

        document.getElementById('hr').innerHTML = hrDisplay; 
        document.getElementById('min').innerHTML = minDisplay; 
        document.getElementById('sec').innerHTML = secDisplay; 
        setTimeout(timerUtility, 1000); 
    } 
}


var option;
function newTask() {
    // Locate the table row to activate
    var tableRow = document.getElementById("table-row");
    tableRow.hidden = false;

    // Task Description column
    var taskDesc = document.getElementById("task-description");
    taskDesc.contentEditable = true;

    // Start Date column
    var startDate = document.getElementById("start-date");
    startDate.innerHTML = new Date().toDateString(); // Takes todays date

}


// FUNCTION: used to submit new task information
function sendData() {
    // Get the user data
    var userNames = document.getElementById("user-names");
    let value = userNames.options[userNames.selectedIndex].innerHTML;

    // Get the task description data
    var description = document.getElementById("task-description").innerHTML;

    // Get the start date data
    var startDate = document.getElementById("start-date").innerHTML;

    // Get total time data
    var hr = document.getElementById("hr").innerHTML;
    var min = document.getElementById("min").innerHTML;
    var sec = document.getElementById("sec").innerHTML;
    var totalTime = hr + " : " + min + " : " + sec;

    // If the description value is incomplete
    if(description == "" || description == null) {
        alert("A description is required. Please fill in a description.")
   
    // Otherwise, send the data and create a new row with this data
    } else {
        // Locate the table
        var table = document.getElementById("table-tasks");

        // Hide the New Task table row
        var tableRow = document.getElementById("table-row");
        tableRow.hidden = true;

        // Create a <tr> at position -1
        var row = table.insertRow(1);

        // Create some <td> elements to add to the new row
        var userRow = row.insertCell(0);
        userRow.innerHTML = value;
        var taskDescRow = row.insertCell(1);
        taskDescRow.innerHTML = description;
        var startDateRow = row.insertCell(2);
        startDateRow.innerHTML = startDate;
        var trackWorkRow = row.insertCell(3);
        trackWorkRow.innerHTML = "<img src=\"./images/check-mark.png\" width=\"30px\" height=\"30px\">"
        var totalTimeRow = row.insertCell(4);
        totalTimeRow.innerHTML = totalTime;
        actionButtonRow = row.insertCell(5);
        completeButton.style.display = "none";
        // actionButtonRow.innerHTML = "<button id=\"delete\">Delete</button>";
        // actionButtonRow.innerHTML = document.getElementById("action-row");

        // Reset task description value
        document.getElementById("task-description").innerHTML = "";
    }
}

function StartStop() {
    // Define variables
    var startStop = document.getElementById("start-stop");

    if(startStop.innerText == "Start") {
        startStop.innerText = "Stop";
    } else {
        startStop.innerText = "Start";
    }
}