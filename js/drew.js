/* declare main variables */
let mainHours, mainMinutes, mainSeconds;
let displayText;
let timerEvents = [];
var popupModal;
var closeButton;
var breakHours, breakMinutes;
// hardcoded times to check for period announcements (24h time)
let hourToTrigger = [8, 9, 12, 13];
let minToTrigger = [30, 55, 25, 50];
var bellSound = new Audio('Sounds/bellsound.wav');
var checkBoxStates = [];

/* initiate some variables BEFORE main gets going */
function startup() {
    console.log("working");
    popupModal = document.getElementById("alertModal");
    closeButton = document.getElementsByClassName("close")[0];
    // add the checkbox states
    checkBoxStates.push(document.getElementById("checkbox1"));
    checkBoxStates.push(document.getElementById("checkbox2"));
    checkBoxStates.push(document.getElementById("checkbox3"));
    checkBoxStates.push(document.getElementById("checkbox4"));
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
                Popup(5);
                AlertSound();
            }
        }
    }
    // iterate through hardcoded times
    for (i = 0; i < 4; i++) {
        if (mainHours == hourToTrigger[i]) {
            if (mainMinutes == minToTrigger[i]) {
                if (mainSeconds == 0 && checkBoxStates[i].checked == true) {
                    // pass the block
                    Popup(i);
                    AlertSound();
                }
            }
        }
    }
}

/* Function to display the activity */
function Popup(block) {
    getBlockActivity(block);
    document.getElementById("modalText").innerHTML = displayText;
    popupModal.style.display = "block";
}

/* Function to play the sound */
function AlertSound() {
    bellSound.play();
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
// drew has done substantial edits here
function getBlockActivity(periodText) {
    let myItems = document.querySelectorAll("#activitiesList dd");
    // no need to check what event fires, has already been done (in var periodText)
    try {
        // try catch so when five is passed there is no error
        if (myItems[periodText].innerText != "") {
            displayText = (myItems[i].innerText);
        } else {
            displayText = ("Go jump up and down and brainstorm items to add to this period");
        }
    } catch (error) {
        // message to be displayed when a break time is set
        if (periodText == 5) {
            displayText = "Take a break!";
        }
    }
    //other ifs for other periods
}