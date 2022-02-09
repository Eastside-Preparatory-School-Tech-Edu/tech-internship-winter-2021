// Function to toggle between alert modes (e.g., sound, popup, etc.)
function SwitchAlertMode() {

}

//RELATING TOO 3 FUNCTIONS BEFORE
// Function to change time for breaks
function AdjustTimer() {
    fullTime = document.getElementById("breakTime").value;
    minutes = document.getElementById("minute-selector").value;
    seconds = document.getElementById("second-selector").value;
    //hours = fullTime[0] + fullTime[1]
    //minutes = fullTime[3] + fullTime[4]
    document.getElementById("breakOutput").innerHTML = "Your break time is: " + fullTime;
    document.getElementById("breakHours").innerHTML = "Hour: " + minutes;
    document.getElementById("breakMinutes").innerHTML = "Minutes: " + seconds;
}


//Function to add custom activity to list
function addActivity() {
    var act = document.getElementById("customAct").value;

    //temp action in place of adding custom activity to activity list
    document.getElementById("inputAct").innerHTML = "Your custom activity is: " + act;
}