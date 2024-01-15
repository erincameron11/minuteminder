// GLOBAL: Define timer variables
let startButton = document.getElementById('start'); 
let stopButton = document.getElementById('stop'); 
let resetButton = document.getElementById('reset'); 
var hour = 0, minute = 0, second = 0;
// var count = 0;

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
    // count = 0; 
    // Display the zeroes
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('count').innerHTML = "00"; 
}); 

// FUNCTION: used to operate the stopwatch timers
function timerUtility() { 

    // If timer is activated
    if (timer) { 
        // count++;

        // If the count is exactly 100, increase seconds
        // if (count == 100) { 
        //     second++; 
        //     count = 0; 
        // } 

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
        // var countDisplay = count; 

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
        // if (count < 10) { 
        //     countDisplay = "0" + countDisplay; 
        // } 

        document.getElementById('hr').innerHTML = hrDisplay; 
        document.getElementById('min').innerHTML = minDisplay; 
        document.getElementById('sec').innerHTML = secDisplay; 
        // document.getElementById('count').innerHTML = countDisplay; 
        setTimeout(timerUtility, 1000); 
    } 
}

// // FUNCITON: used to toggle between showing new task form and cancelling the form
// function NewTask() {
//     // Define variables
//     var newTask = document.getElementById("new-task-section");
//     var newCancelButton = document.getElementById("new-cancel-button");
//     var hidden = newTask.getAttribute("hidden");
//     var user = document.getElementById("user");
//     var description = document.getElementById("desc");

//     // If hidden
//     if(hidden !== null) {
//         newTask.removeAttribute("hidden");
//         newCancelButton.innerText = "Cancel Task";
//         newCancelButton.style.backgroundColor = "#ec7063";
//     // else, if visible
//     } else {
//         newTask.setAttribute("hidden", "hidden");
//         newCancelButton.innerText = "New Task";
//         newCancelButton.style.backgroundColor = "#58d68d";
//         // Clear the form fields
//         user.value = "s";
//         description.value = "";
//     }
// }


var option;
// TEST
function newTask() {
    // Locate the table row to activate
    var tableRow = document.getElementById("table-row");
    tableRow.hidden = false;

    // Add details to the table
    // User column
    // var select = document.createElement("select");

    // option = document.createElement("option");
    // option.setAttribute("value", 0);
    // option.setAttribute('selected', 'selected');
    // option.innerHTML = "Erin Cameron";
    // select.appendChild(option);
    
    // option = document.createElement("option");
    // option.setAttribute("value", 1);
    // option.innerHTML = "Guido van Rossum";
    // select.appendChild(option);
   
    // option = document.createElement("option");
    // option.setAttribute("value", 2);
    // option.innerHTML = "James Gosling";
    // select.appendChild(option);
    
    // option = document.createElement("option");
    // option.setAttribute("value", 3);
    // option.innerHTML = "Bjarne Stroustrup";
    // select.appendChild(option);
    
    // user.appendChild(select);


    // Task Description column
    var taskDesc = document.getElementById("task-description");
    taskDesc.contentEditable = true;


    // Start Date column
    var startDate = document.getElementById("start-date");
    startDate.innerHTML = new Date().toDateString(); // Takes todays date

    // Track Work stopwatch buttons column
    // var trackWork = document.getElementById("track-work");









    // // Locate the table
    // var table = document.getElementById("table-tasks");

    // // Create a <tr> at position 0
    // var row = table.insertRow(-1);

    // // Create some <td> elements to add to the new row
    // var user = row.insertCell(0);
    // var taskDesc = row.insertCell(1);
    // var startDate = row.insertCell(2);
    // var trackWork = row.insertCell(3);
    // var totalTime = row.insertCell(4);
    // var actionButton = row.insertCell(5);

    // // Add details to the table
    // // User column
    // var select = document.createElement("select");

    // option = document.createElement("option");
    // option.setAttribute("value", 0);
    // option.setAttribute('selected', 'selected');
    // option.innerHTML = "Erin Cameron";
    // select.appendChild(option);
    
    // option = document.createElement("option");
    // option.setAttribute("value", 1);
    // option.innerHTML = "Guido van Rossum";
    // select.appendChild(option);
   
    // option = document.createElement("option");
    // option.setAttribute("value", 2);
    // option.innerHTML = "James Gosling";
    // select.appendChild(option);
    
    // option = document.createElement("option");
    // option.setAttribute("value", 3);
    // option.innerHTML = "Bjarne Stroustrup";
    // select.appendChild(option);
    
    // user.appendChild(select);

    // // Task Description column
    // taskDesc.contentEditable = true;
    // taskDesc.innerHTML = "Enter a description";


    // // Start Date column
    // startDate.innerHTML = new Date().toDateString(); // Takes todays date

    // // trackWork.innerHTML = 
    // // totalTime.innerHTML = 
    // // actionButton.innerHTML =
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
        var actionButtonRow = row.insertCell(5);
        actionButtonRow.innerHTML = "<button id=\"delete\">Delete</button>"

        // Reset table values
        document.getElementById("task-description").innerHTML = "";
        document.getElementById("total-time").innerHTML = "00 : 00 : 00";
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