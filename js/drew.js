/* declare main variables */
let mainHours, mainMinutes, mainSeconds;
let displayText;
let timerEvents = [];
var popupModal;
var closeButton;
var breakHours, breakMinutes;

/* initiate some variables BEFORE main gets going */
function startup() {
    console.log("working");
    popupModal = document.getElementById("alertModal");
    closeButton = document.getElementsByClassName("close")[0];
    // close function for modal
    closeButton.onclick = function() {
        popupModal.style.display = "none";
    }
}

/* main function that orients the program */
function main() {
    /* update timer */
    TimerUpdate();
    CheckIfEventShouldFire();
}

/* update the main body timer */
function TimerUpdate() {
    dt = new Date($.now());
    mainHours = dt.getHours();
    mainMinutes = dt.getMinutes();
    mainSeconds = dt.getSeconds();
}

/* compare event timings to the time */
function CheckIfEventShouldFire() {
    if (breakHours == mainHours) {
        if (breakMinutes == mainMinutes) {
            if (mainSeconds == 0) {
                Popup();
                AlertSound();
            }
        }
    }
}

/* Function to display the activity */
function Popup() {
    getRandActivity();
    document.getElementById("modalText").innerHTML = displayText;
    popupModal.style.display = "block";
}

/* Function to play the sound */
function AlertSound() {

}

//MISHA'S CODE
// Function to change time for breaks
function AdjustTimer() {
    fullTime = document.getElementById("breakTime").value;
    breakHours = fullTime[0] + fullTime[1]
    breakMinutes = fullTime[3] + fullTime[4]
    alert("New time set: " + fullTime)
}


//NETA'S CODE
// Function to generate random activity from list
function getRandActivity() {
    let myItems = document.querySelectorAll("#activitiesList li");
    let limit = myItems.length - 1;
    let randNum = Math.floor((Math.random() * (limit)) + 0);
    displayText = (myItems[randNum].innerText);
}