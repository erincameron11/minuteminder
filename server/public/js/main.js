// GLOBAL: Define timer variables
var startButton = document.getElementById("start"); 
var stopButton = document.getElementById("stop"); 
var resetButton = document.getElementById("reset"); 
var completeButton = document.getElementById("complete");
var deleteButton = document.getElementById("delete");
var newTaskButton = document.getElementById("new-task-button");
var cancelTaskButton = document.getElementById("cancel-task-button");
cancelTaskButton.style.display = "none";
// var actionButtonRow;
var hour = 0, minute = 0, second = 0;


// GLOBAL: Event listener for the timer Start button
startButton.addEventListener('click', function() { 
    timer = true; 
    timerUtility(); 
}); 


// GLOBAL: Event listener for the timer Stop button
stopButton.addEventListener('click', function() { 
    timer = false; 
    timerUtility();
}); 


// GLOBAL: Event listener for the timer Reset button
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


// GLOBAL: Event listener for the Complete button
completeButton.addEventListener('click', function() {
    // Get the task description data
    var description = document.getElementById("task-description").innerHTML;

    // If the description value is incomplete
    if(description == "" || description == null) {
        alert("A description is required. Please fill in a task description.");

    // Otherwise, send the data and create a new row with this data
    } else {
        timer = false;

        // Get the user data
        var userNames = document.getElementById("user-names");
        let value = userNames.options[userNames.selectedIndex].innerHTML;

        // Get the start date data
        var startDate = document.getElementById("start-date").innerHTML;

        // Get total time data
        var hr = document.getElementById("hr").innerHTML;
        var min = document.getElementById("min").innerHTML;
        var sec = document.getElementById("sec").innerHTML;
        var totalTime = hr + " : " + min + " : " + sec;

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

        // Locate the table
        var table = document.getElementById("table-tasks");

        // Hide the New Task table row
        var tableRow = document.getElementById("table-row");
        tableRow.hidden = true;

        // Create a <tr> at position -1
        var row = table.insertRow(1);

        // Create some <td> elements to add to the new row and add the details collected to this row
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
        actionButtonRow.innerHTML = "<button id=\"delete\" onclick=\"deleteRow(this);\">Delete</button>";

        // Reset task description value
        document.getElementById("task-description").innerHTML = "";
    }
})


// GLOBAL: Event listener for the New Task button
newTaskButton.addEventListener('click', function() {
    timer = false;

    // Hide/show buttons
    newTaskButton.style.display = "none";
    cancelTaskButton.style.display = "inline-block";
    completeButton.style.display = "inline-block";
    deleteButton.style.display = "none";

    // Display the table row
    var tableRow = document.getElementById("table-row");
    tableRow.hidden = false;

    // Task Description column
    var taskDesc = document.getElementById("task-description");
    taskDesc.contentEditable = true;

    // Start Date column
    var startDate = document.getElementById("start-date");
    startDate.innerHTML = new Date().toDateString(); // Takes todays date
})


// GLOBAL: Event listener for the Cancel Task button
cancelTaskButton.addEventListener('click', function() {
    timer = false;
    cancelTaskButton.style.display = "none";
    newTaskButton.style.display = "inline-block";

    // Locate the table row to hide
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

// FUNCTION: used to delete a row
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}