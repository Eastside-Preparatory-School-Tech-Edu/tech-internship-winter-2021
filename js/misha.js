// Function to toggle between alert modes (e.g., sound, popup, etc.)
function SwitchAlertMode() {

}

//RELATING TOO 3 FUNCTIONS BEFORE
// Function to change time for breaks
function AdjustTimer1() {
    var time = document.getElementById("breakTime1").value;

    //temp action in place of changing time value
    document.getElementById("newTime").innerHTML = "Your new break time is: " + time;
}

function AdjustTimer2() {
    var time = document.getElementById("breakTime2").value;

    //temp action in place of changing time value
    document.getElementById("newTime").innerHTML = "Your new break time is: " + time;
}

function AdjustTimer3() {
    var time = document.getElementById("breakTime3").value;

    //temp action in place of changing time value
    document.getElementById("newTime").innerHTML = "Your new break time is: " + time;
}


//Function to add custom activity to list
function addActivity() {
    var act = document.getElementById("customAct").value;

    //temp action in place of adding custom activity to activity list
    document.getElementById("inputAct").innerHTML = "Your custom activity is: " + act;
}