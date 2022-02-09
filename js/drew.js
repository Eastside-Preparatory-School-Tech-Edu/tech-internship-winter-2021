/* declare main variables */
let mainHours, mainMinutes, mainSeconds;
let displayText;
let timerEvents = [];
var popupModal;
var closeButton;
var breakHours, breakMinutes;
breakSeconds
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
            if (breakSeconds == mainSeconds) {
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
    breakMinutes = document.getElementById("minute-selector").value;
    breakSeconds = document.getElementById("second-selector").value;
    if (document.getElementById("Block1").checked) {
        breakHours = 9;
        breakMinutes = 40 - document.getElementById("minute-selector").value;
        if (document.getElementById("second-selector").value == 0) {
            breakSeconds = 00;
        } else {
            breakSeconds = 60 - document.getElementById("second-selector").value;
        }
    }
    if (document.getElementById("Block2").checked) {
        if (breakMinutes > 5) {
            breakMinutes = 65 - document.getElementById("minute-selector").value;
            if (document.getElementById("second-selector").value == 0) {
                breakSeconds = 00;
            } else {
                breakSeconds = 60 - document.getElementById("second-selector").value;
            }
            breakHours = 10;
        } else {
            breakMinutes = 5 - document.getElementById("minute-selector").value;
            if (document.getElementById("second-selector").value == 0) {
                breakSeconds = 00;
            } else {
                breakSeconds = 60 - document.getElementById("second-selector").value;
            }
            breakHours = 11;
        }
    }
    if (document.getElementById("Block3").checked) {
        breakHours = 13;
        breakMinutes = 35 - document.getElementById("minute-selector").value;
        if (document.getElementById("second-selector").value == 0) {
            breakSeconds = 00;
        } else {
            breakSeconds = 60 - document.getElementById("second-selector").value;
        }
    }
    if (document.getElementById("Block4").checked) {
        if (breakMinutes == 0 && breakSeconds == 0) {
            breakMinutes = document.getElementById("minute-selector").value;
            breakSeconds = 00;
            breakHours = 15;
        } else {
            breakMinutes = 59 - document.getElementById("minute-selector").value;
            if (document.getElementById("second-selector").value == 0) {
                breakSeconds = 00;
            } else {
                breakSeconds = 60 - document.getElementById("second-selector").value;
            }
            breakHours = 14;
        }
    }
    alert("New time set: " + breakHours + ":" + breakMinutes + ":" + breakSeconds)
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